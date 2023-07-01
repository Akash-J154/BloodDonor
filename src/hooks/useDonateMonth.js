import React from "react";
import { useState } from "react";
export const useDonateMonth=React.createContext({})
export const Month=({children})=>{
    const [date,setDate]=useState(null);
    const [month,setMonth]=useState(null);

    return(
        <useDonateMonth.Provider value={{date,setDate,month,setMonth}}>
            {children}
            </useDonateMonth.Provider>
    )
}