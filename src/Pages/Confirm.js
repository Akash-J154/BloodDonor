import { React, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDonateMonth } from "../hooks/useDonateMonth";

const Confirm = (props) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const value1 = searchParams.get("value1");
  const value2 = searchParams.get("value2");
  const value3 = searchParams.get("value3");
  const [isDisabled, setIsDisabled] = useState(false);
  var currentdate=new Date();
  var month=currentdate.getMonth()+1;
  var day=currentdate.getDate();
  const nav =useNavigate()
  let {setDate,setMonth}=useContext(useDonateMonth)
  const handleClick = () => {
    setIsDisabled(true);
    setDate(day)
    setMonth(month)
    nav("/Homepage")
    
    
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
