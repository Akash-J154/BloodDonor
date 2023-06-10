import axios from 'axios';
export async function fetchRequest(data){
    data = data.filter(function( element ) {
        return element !== undefined;
     });
     console.log(data)
    const url='http://127.0.0.1:8000/api/bloodrequest/'
    try
    {
        const response = await axios.put(url,{"data":data});
        console.log(response.data)
        return response.data;
        //console.log(response.data)

    }catch(error){
        console.log(error);
        throw error;
}
}