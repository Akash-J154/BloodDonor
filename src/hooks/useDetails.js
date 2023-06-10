import React from "react";
import { useState } from "react";
export const useDetails=React.createContext({});
export const Save = ({children})=>{
    const [recipientdetails,setRecipientdetails]=useState([

        {
            "Name":"akash",
            "Location":"tvm",
            "Contact":"7306829337",
            "BloodGroup":"O+",
            "Amount":"2"
        },
        {
            "Name":"abhiram",
            "Location":"kollam",
            "Contact":"7306049487",
            "BloodGroup":"A+",
            "Amount":"1"
        },
        {
            "Name":"amal",
            "Location":"pathanamthitta",
            "Contact":"8547802169",
            "BloodGroup":"O+",
            "Amount":"2"
        },
        {
            "Name":"akshay",
            "Location":"tvm",
            "Contact":"8078563669",
            "BloodGroup":"A+",
            "Amount":"1"

        },
        {
            "Name":"albin",
            "Location":"kozhikode",
            "Contact":"13457548",
            "BloodGroup":"B+",
            "Amount":"1"

        }
        
    ])
    const [donordetails,setDonordetails]=useState([

        {
            "Name":"akash",
            "Location":"tvm",
            "Contact":"7306829337",
            "BloodGroup":"O+",
            "Amount":"2"
        },
        {
            "Name":"abhiram",
            "Location":"kollam",
            "Contact":"7306049487",
            "BloodGroup":"A+",
            "Amount":"1"
        },
        {
            "Name":"amal",
            "Location":"pathanamthitta",
            "Contact":"8547802169",
            "BloodGroup":"O+",
            "Amount":"2"
        },
        {
            "Name":"akshay",
            "Location":"tvm",
            "Contact":"8078563669",
            "BloodGroup":"A+",
            "Amount":"1"

        },
        {
            "Name":"albin",
            "Location":"kozhikode",
            "Contact":"13457548",
            "BloodGroup":"B+",
            "Amount":"1"

        }
        
    ])
    return(
        <useDetails.Provider value={{recipientdetails,setRecipientdetails,donordetails,setDonordetails}}>
            {children}
            </useDetails.Provider>
    )
    
}
