import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios'
const Confirm = (props) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const value1 = searchParams.get("value1");
  const value2 = searchParams.get("value1");
  const value3 = searchParams.get("value2");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);
    try{
        let response=axios.post(' http://127.0.0.1:8000/api/user/', {
            'age':'32',
                           'gender':'M',
                          
                           'location':'thiruvananthapuram',
                           
                           'weight':'56',
                           'contact_number':'12326485',
                           
                          'blood_group':'A+',
                          
         },
         {headers: {
           "Content-Type": "application/json",
         }}) 
         console.log(response)
         
        

      }
      catch(error)
      {
        console.log(error)
      }
   
    alert("successfully confirmed your points will be updated as soon as recipient accepts it")
    
    // perform button action 0here
  };

  return (
    <div className='requestpage-back'>
    <div className='requestpage-container'>
    <div>
      <div>
        {" "}
        <label>Name</label>
        <span>{value1}</span>
      </div>
      <div>
        {" "}
        <label>Location</label>
        <span>{value2}</span>
      </div>
      <div>
        {" "}
        <label>BloodGroup</label>
        <span>{value3}</span>
      </div>
      <label>
        <input type="checkbox" name="myCheckbox" value="1" /> The data given above is true to my knowledge
      </label>
      <button disabled={isDisabled} onClick={handleClick}>
        {isDisabled ? "Button Disabled" : "Final Conformation!"}
      </button>
    </div>
    </div>
    </div>
  );
};

export default Confirm;
