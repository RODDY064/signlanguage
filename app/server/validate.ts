import { z } from 'zod';

// Define types using Zod for runtime type checking
const ValidateTypeSchema = z.object({
    id: z.number().positive(),
    user_id: z.number().positive(), 
    email: z.string().email(),
    type: z.union([z.literal('correct'), z.literal('wrong')])
  });

const SignDataSchema = z.object({
  users_voted: z.array(z.string()).optional(),
  total_votes: z.number().nonnegative(),
  correctness_votes: z.number().nonnegative().optional(),
  wrongness_votes: z.number().nonnegative().optional(),
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
    
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
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

  try {
    const response = await fetch(`${process.env.API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data }),
    });
     
    const res = await response.json();

    // console.log('update data response:', res);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
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

    const updatedSignData: SignData = {
      users_voted: [...new Set([...(dbData.users_voted || []), email])], // Ensure uniqueness
      total_votes: dbData.total_votes + 1,
      correctness_votes: type === 'correct' ? (dbData.correctness_votes ?? 0) + 1 : dbData.correctness_votes,
      wrongness_votes: type === 'wrong' ? (dbData.wrongness_votes ?? 0) + 1 : dbData.wrongness_votes,
    };

    await updateEndpoint(signEndpoint, updatedSignData);
 
    // Fetch and update user data
    const userEndpoint = `/custom-users/${user_id}`;
    const userParams = {
      'fields[0]': 'total_votes',
      'fields[1]': 'correctness_votes',
      'fields[2]': 'wrongness_votes',
    };
    const userData = await fetchData(userEndpoint, userParams);
    const updatedUserData = {
      total_votes: userData.total_votes + 1,
      correctness_votes: type === 'correct' ? (dbData.correctness_votes ?? 0) + 1 : dbData.correctness_votes,
      wrongness_votes: type === 'wrong' ? (dbData.wrongness_votes ?? 0) + 1 : dbData.wrongness_votes,
    };

     await updateEndpoint(userEndpoint, updatedUserData);
    //   // send the data to the server to get update the session


    console.log('Data updated successfully');
    return { message: 'Data updated successfully' };
  } catch (error) {
    console.error('Error in validateVideo:', error);
    throw new Error('Internal Server Error');
  }
}
