import React, { useContext } from "react";
import {  useLocation } from "react-router-dom";
import {Device} from 'twilio-client';
import { useDetails } from "../hooks/useDetails";

import useNearestLocations from "../hooks/useNearestLocations";

const RequestBlood = () => {
  
  let { donordetails } = useContext(useDetails);
  
  const location = useLocation();
  
  const { bloodgroup, latitude,longitude } = location.state || {};


  let nearestpositions=useNearestLocations(donordetails,latitude,longitude)

  

  const handleClick=()=>{
    
    const accessToken ={"accountSid":"ACa27a9cefccbf6e0385f9c7603629c26f","apiKeySid":"SK72877410d03933987decef945edf500e","apiKeySecret":"1fNjBE1Ol3FDNrcqP1Vzr7w9F4w36qZA"}
    const toNumber = '+917306829337'; // Replace with the phone number you want to call
    const fromNumber = '+14302336811';
    
    const device = new Device(accessToken);

    device.on('ready', () => {
      const params = { To: toNumber ,
      From : fromNumber};
      device.connect(params);
    });
    
    device.on('connect', () => {
      console.log('Connected to Twilio');
    });

    device.on('disconnect', () => {
      console.log('Call ended');
    });

    device.error((error) => {
      console.error('Twilio Device Error:', error.message);
    });
  }
  
  return bloodgroup === "O+" ? (
    <>
      {nearestpositions.nearestLocations.map((items, index) => {
        return (
          <div>
          <button onClick={handleClick}>Contact Nearby Donors</button>
          <div className="dialoge-container">
            
            <div className="visble">
             
              <div className="dia-flex">
                <label>Name</label>
                <span>
                  <label>{items.Name}</label>
                </span>
              </div>

              <div className="dia-flex">
                <label>Blood Group</label>
                <span>
                  <label>{items.BloodGroup}</label>
                </span>
              </div>
              <div className="dia-flex">
                <label>Amount</label>
                <span>
                  <label>{items.Amount}</label>
                </span>
              </div>
              <div className="dia-flex">
                <label>Purpose</label>
                <span>
                  <label>Accident</label>
                </span>
              </div>
             
            </div>
          </div>
          </div>
        );
      })}
     
    </>
  ) : bloodgroup === "A+" ? (
    <>
      {" "}
      {nearestpositions.nearestLocations
        .filter((result) => {
          if (result.BloodGroup === bloodgroup) return result;
        })
        .map((items, index) => {
          return (
            <div>
              <button>Contact Nearby Donors</button>
            <div className="dialoge-container">
              <div className="visble">
              
                <div className="dia-flex">
                  <label>Name</label>
                  <span>
                    <label>{items.Name}</label>
                  </span>
                </div>

                <div className="dia-flex">
                  <label>Blood Group</label>
                  <span>
                    <label>{items.BloodGroup}</label>
                  </span>
                </div>
                <div className="dia-flex">
                  <label>Amount</label>
                  <span>
                    <label>{items.Amount}</label>
                  </span>
                </div>
                <div className="dia-flex">
                  <label>Purpose</label>
                  <span>
                    <label>Accident</label>
                  </span>
                </div>
              
              </div>
            </div>
            </div>
          );
        })}{" "}
      
    </>
  ) : bloodgroup === "O-" ? (
    <>
      {nearestpositions.nearestLocations
        .filter((result) => {
          if (result.BloodGroup === bloodgroup) return result;
        })
        .map((items, index) => {
          return (
            <div>
              <button>Contact Nearby Donors</button>
            <div className="dialoge-container">
              <div className="visble">
              <h1>Contact Nearby Donors</h1>
                <div className="dia-flex">
                  <label>Name</label>
                  <span>
                    <label>{items.Name}</label>
                  </span>
                </div>

                <div className="dia-flex">
                  <label>Blood Group</label>
                  <span>
                    <label>{items.BloodGroup}</label>
                  </span>
                </div>
                <div className="dia-flex">
                  <label>Amount</label>
                  <span>
                    <label>{items.Amount}</label>
                  </span>
                </div>
                <div className="dia-flex">
                  <label>Purpose</label>
                  <span>
                    <label>Accident</label>
                  </span>
                </div>
               
              </div>
            </div>
            </div>
          );
        })}{" "}
    
    </>
  ) : (
    bloodgroup === "B+" && (
      <>
        {nearestpositions.nearestLocations
          .filter((result) => {
            if (result.BloodGroup === bloodgroup) return result;
          })
          .map((items, index) => {
            return (
              <div>
              <button>  Contact Nearby Donors</button>
              <div className="dialoge-container">
                <div className="visble">
                <h1>Contact Nearby Donors</h1>
                  <div className="dia-flex">
                    <label>Name</label>
                    <span>
                      <label>{items.Name}</label>
                    </span>
                  </div>

                  <div className="dia-flex">
                    <label>Blood Group</label>
                    <span>
                      <label>{items.BloodGroup}</label>
                    </span>
                  </div>
                  <div className="dia-flex">
                    <label>Amount</label>
                    <span>
                      <label>{items.Amount}</label>
                    </span>
                  </div>
                  <div className="dia-flex">
                    <label>Purpose</label>
                    <span>
                      <label>Accident</label>
                    </span>
                  </div>
                 
                </div>
              </div>
              </div>
            );
          })}{" "}
       
      
      </>
    )
  );
};

export default RequestBlood;
