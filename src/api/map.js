import axios from 'axios';
export async function maps(){
    const url='http://overpass-api.de/api/interpreter?data=[out:json];node(around:300000,9.3852605,76.7848789)["place"="city"];out;'
    try
    {
        const response = await axios.get(url);
        //console.log(response.data)
        return response.data;

    }catch(error){
        console.log(error);
        throw error;
 }
}