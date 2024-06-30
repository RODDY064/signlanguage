// get api data 

export async function getSignData(){
    try {

        const params = {
            "fields[0]":"video_name",
            "fields[1]":"video_url",
            "fields[2]":"description"
          
        }
        
         // get the data that the user has not voted for
        const filter = ''

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

        // console.log(dataJson.data)

        if (!response.ok) {
            throw new Error(dataJson.message || "Fail to fetch data")
        }
        // console.log(dataJson.data)
        return dataJson.data
    } catch (error) {
        console.log(error)
        throw new Error("Fail to fetch data")
    }
}

// get similar data 

export async function getSimilarData({noOfItems, currentItemID }:{noOfItems:number,currentItemID:number}){
    try {
        const response = await fetch('https://popular-birds-9e1d0b64bf.strapiapp.com/api/signs',{     
            method:"GET",
            headers:{
                "content-type":"application/json"
            }
        })

        const dataJson = await response.json();

        if (!response.ok) {
            throw new Error(dataJson.message || "Fail to fetch data")
        }

        if(noOfItems){     
            // make sure current item is not included in the list
            console.log(currentItemID)

            if(currentItemID){
                const filter = dataJson.data.filter((item:any)=>item.id !== currentItemID).slice(0,noOfItems)
                // console.log(filter)
                return filter
            }
        }

        return dataJson.data
    } catch (error) {
        console.log(error)
        throw new Error("Fail to fetch data")
    }
}


// get api data by id

export async function getSignDataById(id:number){
    try {
        const response = await fetch(`https://popular-birds-9e1d0b64bf.strapiapp.com/api/signs/${id}`,{
            method:"GET",
            headers:{
                "content-type":"application/json"
            }
        })

        const dataJson = await response.json();
        // console.log(dataJson.data)
        return dataJson.data


    }catch (error) {
        console.log(error)
        throw new Error("Fail to fetch data")
    }

}