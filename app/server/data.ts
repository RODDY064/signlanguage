interface User {
    email: string;
    type: 'correct' | 'wrong';
  }
  
  interface VideoAttributes {
    video_name: string;
    description: string;
    video_url: string;
    users_voted: User[];
  }
  
  interface Video {
    id: number;
    attributes: VideoAttributes;
  }
  
  interface DataJson {
    data: Video[];
  }

  function getVideosNotVotedByUser(
    dataJson: DataJson,
    typeReturn: "not contain" | "contain", 
    userEmail?: string 
  ): Video[] {
    if (!userEmail) return dataJson.data; // Return all videos if no email is provided
  
    return dataJson.data.filter(video => {
      // Include videos where users_voted is null
      if (video.attributes.users_voted === null) return true;
  
      const userHasVoted = video.attributes.users_voted.some(user => user.email === userEmail);
      // For "contain", return true if userHasVoted is true, for "not contain", return true if userHasVoted is false
      return typeReturn === "contain" ? userHasVoted : !userHasVoted;
    });
  }
  
  

export async function getSignData({email ,typeReturn }:{ email?:string, typeReturn: "contain" | "not contain"}){
    try {

        const params = {
            "fields[0]":"video_name",
            "fields[1]":"video_url",
            "fields[2]":"description",
            "fields[3]":"users_voted"
          
        }
    


        const url = new URL(`${process.env.API_BASE_URL}/signs`);
        Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));
       

        const response = await fetch(url.toString(),{
            method:"GET",
             cache: 'no-cache',
            headers:{
                "content-type":"application/json"
            }
        })
   

        const dataJson = await response.json();
  

         if(!email){
           throw new Error('Fail to fetch data')
         }

        // filter data 

        const result = getVideosNotVotedByUser(dataJson, typeReturn , email);
        // console.log(result , typeReturn);

    
        if (!response.ok) {
            throw new Error(dataJson.message || "Fail to fetch data")
        }
        // console.log(dataJson.data)
        return result
    } catch (error) {
        console.log(error)
        throw new Error("Fail to fetch data")
    }
}

// get similar data 

export async function getSimilarData({noOfItems, currentItemID , email, typeReturn }:{noOfItems:number,currentItemID:number , email?:string, typeReturn: "not contain" | "contain"}){
    try {

        const params = {
            "fields[0]":"video_name",
            "fields[1]":"video_url",
            "fields[2]":"description",
            "fields[3]":"users_voted",
            "filters[id][$ne]":`${currentItemID}`

          
        }
        
       

        const url = new URL(`${process.env.API_BASE_URL}/signs`);
        Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));


        const response = await fetch(url.toString(),{     
            method:"GET",
            cache:"no-cache",
            headers:{
                "content-type":"application/json"
            }
        })

        const dataJson = await response.json();

        if (!response.ok) {
            throw new Error(dataJson.message || "Fail to fetch data")
        }
         const filter = getVideosNotVotedByUser(dataJson, typeReturn, email)
        return filter.slice(0,noOfItems)
    } catch (error) {
        console.log(error)
        throw new Error("Fail to fetch data")
    }
}


// get api data by id

export async function getSignDataById(id:number){
    try {

        const params = {
            "fields[0]":"video_name",
            "fields[1]":"video_url",
            "fields[2]":"description"
          
        }

        const url = new URL(`${process.env.API_BASE_URL}/signs/${id}?populate=*`); 
        Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));

        const response = await fetch(url.toString(),{
            method:"GET",
            headers:{
                "content-type":"application/json"
            }
        })

        const dataJson = await response.json();
        return dataJson.data


    }catch (error) {
        console.log(error)
        throw new Error("Fail to fetch data")
    }

}