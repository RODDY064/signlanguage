"use server"

import { z } from 'zod';

// Define types using Zod for runtime type checking
const ValidateTypeSchema = z.object({
    id: z.number().positive(),
    user_id: z.string(), 
    email: z.string().email(),
    type: z.union([z.literal('correct'), z.literal('wrong')])
  });

const SignDataSchema = z.object({
  users_voted: z.array(z.object({email: z.string().optional(),type: z.string().optional()})).optional().nullable(),
  total_votes: z.number().nonnegative().optional().nullable(),
  correctness_votes: z.number().nonnegative().optional().nullable(),
  wrongness_votes: z.number().nonnegative().optional().nullable(),
});

type ValidateType = z.infer<typeof ValidateTypeSchema>;
type SignData = z.infer<typeof SignDataSchema>;





// to return the data needed to update it 

async function fetchData(endpoint: string, params: Record<string, string>): Promise<SignData> {
      const url = new URL(`${process.env.API_BASE_URL}${endpoint}`);
      Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));
    
      try {
        const response = await fetch(url.toString(), {
          method: 'GET',
          cache: 'no-cache',
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (!response.ok && response.status !== 200) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        // console.log('Data fetched:', response);
        const data = await response.json();
        // console.log('Data fetched:', data.data.attributes);
        return SignDataSchema.parse(data.data.attributes);
      } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
      }
    }

async function updateEndpoint(endpoint: string, data: unknown): Promise<void> {
  
  // console.log('update data:', data);
   const apiToken = process.env.API_TOKEN;

  try {
    const response = await fetch(`${process.env.API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${apiToken}` 
      },
      body: JSON.stringify({ data }),
    });


    if (!response.ok &&  response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status} , number 2`);
    }

    // console.log(response)
     
    const res = await response.json();

    // console.log('update data response:', res);

  } catch (error) {
    console.error('Error updating data:', error);
    throw new Error('Failed to update data');
  }
}


export async function validateVideo(input: ValidateType) {
  
  // console.log('validateVideo input:', input);

  try {

    const { id, email , type , user_id } = ValidateTypeSchema.parse(input);

    // get the data from the database

    const signEndpoint = `/signs/${id}`;
    const signParams = {
      'fields[0]': 'users_voted',
      'fields[1]': 'correctness_votes',
      'fields[2]': 'wrongness_votes',
      'fields[3]': 'total_votes',
    };
    
    const dbData = await fetchData(signEndpoint, signParams);

     // update the sign data

    const userVoteData = { email : email , type : type }

    const updatedSignData: SignData = {
      users_voted: [...(dbData?.users_voted ?? []), userVoteData], // Ensure uniqueness
      total_votes: (dbData.total_votes?? 0) + 1,
      correctness_votes: type === 'correct' ? (dbData.correctness_votes ?? 0) + 1 : dbData.correctness_votes,
      wrongness_votes: type === 'wrong' ? (dbData.wrongness_votes ?? 0) + 1 : dbData.wrongness_votes,
    };

    await updateEndpoint(signEndpoint, updatedSignData);

    // Fetch and update user data
    const userEndpoint = `/custom-users/${user_id}`;
    const userParams = {
      'fields[0]': 'total_votes',
      'fields[1]': 'correctness_votes',
      'fields[2]': 'wrongness_votes'
    };
    const userData = await fetchData(userEndpoint, userParams)

    // console.log(userData)
    

    const updatedUserData = {
      total_votes: (userData?.total_votes?? 0)  + 1,
      correctness_votes: type === 'correct' ? (dbData.correctness_votes ?? 0) + 1 : dbData.correctness_votes,
      wrongness_votes: type === 'wrong' ? (dbData.wrongness_votes ?? 0) + 1 : dbData.wrongness_votes,
    };

    //  console.log(updatedUserData)

     await updateEndpoint(userEndpoint, updatedUserData);
    //   // send the data to the server to get update the session


    console.log('Data updated successfully');
    return { status: 200, message: 'Data updated successfully' };
  } catch (error) {
    console.error('Error in validateVideo:', error);
    throw new Error('Internal Server Error');
  }
}
