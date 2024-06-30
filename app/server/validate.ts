
export interface ValidateType {
    id: number;
    email: string;
    
}


// to return the data needed to update it 

export async function updateData(url:string,fields:string){
    try {
        const response = await fetch(`${url}?${fields}`,{     
            method:"GET",
            headers:{
                "content-type":"application/json"
            }
        })

        const dataJson = await response.json();

        if (!response.ok) {
            throw new Error(dataJson.message || "Fail to fetch data")
        }

        return dataJson.data.attributes
    } catch (error) {
        console.log(error)
        throw new Error("Fail to fetch data")
    }

}




export async function validateVideo({ id, email }: ValidateType) {
  try {
    // get the data from the database
    const dbData = await updateData(`http://localhost:1337/api/signs/${id}`,`fields[0]=users_voted&fields[1]=correctness_votes&fields[2]=wrongness_votes&fields[3]=total_votes`);

    console.log(dbData);

    let data ;

     if(dbData){
        data = {
            users_voted: [...dbData.users_voted, email],
            total_votes: dbData.total_votes + 1,
            correctness_votes: dbData.correctness_votes,
            wrongness_votes: dbData.wrongness_votes,
        
        }
     }else{
        data = {
           
                users_voted: [email],
                total_votes: dbData.total_votes + 1,
                correctness_votes: dbData.correctness_votes + 1,
                wrongness_votes: dbData.wrongness_votes + 1,
            
        }
     }


     // update the sign data

    const res = await fetch(`http://localhost:1337/api/signs/${id}`, {
      method: "PUT",
      headers:{
        "content-type":"application/json"
    },
    body: JSON.stringify({data}),
    });

     // do something if is not ok 

    if(!res.ok && res.status === 400){
        console.log('user data fetch fail')
       throw new Error("Fail to update data")
    }

    const userData = await updateData(`http://localhost:1337/api/custom-users/${id}`,`fields[0]=total_votes&fields[1]=correctness&fields[2]=wrongness`);

    const updateUserData = await fetch(`http://localhost:1337/api/custom-users/${id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            data:{
            total_votes: userData.total_votes + 1,
            correctness: userData.correctness_votes + 1,
            wrongness: userData.wrongness_votes + 1
            }
        })
    })
         
    return { message: "Data updated successfully" };

  } catch (error) {
    console.log(error);
    throw Error("Internal Server Error");
  }
}


// import { z } from 'zod';

// // Define types using Zod for runtime type checking
// const ValidateTypeSchema = z.object({
//   id: z.number().positive(),
//   email: z.string().email(),
// });

// const SignDataSchema = z.object({
//   users_voted: z.array(z.string()),
//   total_votes: z.number().nonnegative(),
//   correctness_votes: z.number().nonnegative(),
//   wrongness_votes: z.number().nonnegative(),
// });

// type ValidateType = z.infer<typeof ValidateTypeSchema>;
// type SignData = z.infer<typeof SignDataSchema>;

// const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:1337';

// async function fetchData(endpoint: string, params: Record<string, string>): Promise<SignData> {
//   const url = new URL(`${API_BASE_URL}${endpoint}`);
//   Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));

//   try {
//     const response = await fetch(url.toString(), {
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     return SignDataSchema.parse(data.data.attributes);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw new Error('Failed to fetch data');
//   }
// }

// async function updateEndpoint(endpoint: string, data: unknown): Promise<void> {
//   try {
//     const response = await fetch(`${API_BASE_URL}${endpoint}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ data }),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//   } catch (error) {
//     console.error('Error updating data:', error);
//     throw new Error('Failed to update data');
//   }
// }

// export async function validateVideo(input: ValidateType): Promise<{ message: string }> {
//   try {
//     // Validate input
//     const { id, email } = ValidateTypeSchema.parse(input);

//     // Fetch sign data
//     const signEndpoint = `/api/signs/${id}`;
//     const signParams = {
//       'fields[0]': 'users_voted',
//       'fields[1]': 'correctness_votes',
//       'fields[2]': 'wrongness_votes',
//       'fields[3]': 'total_votes',
//     };
//     const dbData = await fetchData(signEndpoint, signParams);

//     // Update sign data
//     const updatedSignData: SignData = {
//       users_voted: [...new Set([...dbData.users_voted, email])], // Ensure uniqueness
//       total_votes: dbData.total_votes + 1,
//       correctness_votes: dbData.correctness_votes + 1,
//       wrongness_votes: dbData.wrongness_votes,
//     };
//     await updateEndpoint(signEndpoint, updatedSignData);

//     // Fetch and update user data
//     const userEndpoint = `/api/custom-users/${id}`;
//     const userParams = {
//       'fields[0]': 'total_votes',
//       'fields[1]': 'correctness_votes',
//       'fields[2]': 'wrongness_votes',
//     };
//     const userData = await fetchData(userEndpoint, userParams);
//     const updatedUserData = {
//       total_votes: userData.total_votes + 1,
//       correctness_votes: userData.correctness_votes + 1,
//       wrongness_votes: userData.wrongness_votes,
//     };
//     await updateEndpoint(userEndpoint, updatedUserData);

//     return { message: 'Data updated successfully' };
//   } catch (error) {
//     console.error('Error in validateVideo:', error);
//     throw new Error('Internal Server Error');
//   }
// }