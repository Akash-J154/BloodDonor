import React from "react";
import { useState } from "react";
export const useDetails=React.createContext({});
export const Save = ({children})=>{
    const [recipientdetails,setRecipientdetails]=useState([
        {
            "Name":"akash",
            "Location":"thiruvananthapuram",
            "Contact":"7306829337",
            "BloodGroup":"O+",
            "Amount":"2",
            "lat": 8.5241,
            "lon": 76.9366 
        },
        {
            "Name":"abhiram",
            "Location":"thiruvalla",
            "Contact":"7306049487",
            "BloodGroup":"A+",
            "Amount":"1",
            "lat": 8.4822, "lon": 76.9503
        },
        {
            "Name":"amal",
            "Location":"vizhinjam",
            "Contact":"8547802169",
            "BloodGroup":"O+",
            "Amount":"2", "lat": 8.5052, "lon": 76.9460
        },
        {
            "Name":"akshay",
            "Location":"Pattom",
            "Contact":"8078563669",
            "BloodGroup":"A+",
            "Amount":"1", "lat": 8.5456, "lon": 76.9482

        },
        {
            "Name":"Balaramapuram",
            "Location":"Kazhakootam",
            "Contact":"134",
            "BloodGroup":"B+",
            "Amount":"1",
            "lat": 8.5522, "lon": 76.8843
        }
    ])
    const [donordetails,setDonordetails]=useState([

        {
            "Name":"akash",
            "Location":"thiruvananthapuram",
            "Contact":"7306829337",
            "BloodGroup":"O+",
            "Amount":"2",
            "lat": 8.5241,
            "lon": 76.9366 
        },
        {
            "Name":"abhiram",
            "Location":"thiruvalla",
            "Contact":"7306049487",
            "BloodGroup":"A+",
            "Amount":"1",
            "lat": 8.4822, "lon": 76.9503
        },
        {
            "Name":"amal",
            "Location":"vizhinjam",
            "Contact":"8547802169",
            "BloodGroup":"O+",
            "Amount":"2", "lat": 8.5052, "lon": 76.9460
        },
        {
            "Name":"akshay",
            "Location":"Pattom",
            "Contact":"8078563669",
            "BloodGroup":"A+",
            "Amount":"1", "lat": 8.5456, "lon": 76.9482

        },
        {
            "Name":"Balaramapuram",
            "Location":"Kazhakootam",
            "Contact":"134",
            "BloodGroup":"B+",
            "Amount":"1",
            "lat": 8.5522, "lon": 76.8843
        }
        
    ])
    return(
        <useDetails.Provider value={{recipientdetails,setRecipientdetails,donordetails,setDonordetails}}>
            {children}
            </useDetails.Provider>
    )
    
}
