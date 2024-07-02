import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const description = formData.get('description') as string;
    const vote = formData.get('vote') as string;
    const video = formData.get('video') as File | null;
    const id  = formData.get('id') as string | null
    const email = formData.get('email') as string | null

    

    if(!id && !email){
      throw new Error('Sign id and user email are required ')
    }

    const dataFetch = fetch(`${process.env.API_BASE_URL}/signs/${id}?fields[0]=users_voted`,{
       method:'GET',
       cache: 'no-cache',
          headers: { 'Content-Type': 'application/json' }
    }).then( async(res)=>{
        if(res.ok && res.status === 200){
            const results = await res.json()
            return results.data.attributes.users_voted
        }else{
            return null
        }
    }).catch((error)=>{
     console.log(error)
     throw new Error('Fail to fetch data')
    })


    const userData = await dataFetch

    // console.log(userData)

    if(!userData){
      throw new Error ('Fail to fetch data')
    }

    const newUsersVoted = [...userData,{ email:email, type: vote }]

  
    if (video) {
        const update = await fetch(`${process.env.API_BASE_URL}/signs/${id}`,{
            method:"PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                data:{
                    video_name: description,
                    video_url:'',
                    users_voted:newUsersVoted

                }
            })
        })

        const res = await update.json()  

        console.log(res)

       if(!update.ok){
        return NextResponse.json({ error: 'Fail to update data' },{ status:400});
        }
    }else{
        const update = await fetch(`${process.env.API_BASE_URL}/signs/${id}`,{
            method:"PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                data:{
                    video_name: description,
                    users_voted:newUsersVoted

                }
            })
        })

        
        const res = await update.json()  

        console.log(res)

       if(!update.ok){
        return NextResponse.json({ error: 'Fail to update data' },{ status:400});
        }
    }

    // Respond with success
    return NextResponse.json({ message: 'Form submitted successfully' },{ status:200});
  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
