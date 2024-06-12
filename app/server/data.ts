// get api data 

export async function getSignData(){
    try {
        const response = await fetch('https://popular-birds-9e1d0b64bf.strapiapp.com/api/signs',{
            method:"GET",
            headers:{
                "content-type":"application/json"
            }
        })


        const dataJson = await response.json();

        // console.log(dataJson)

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