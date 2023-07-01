import React, { useContext } from "react";
import { useState} from "react";
import {  useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDetails } from "../hooks/useDetails";
import useNearestLocations from "../hooks/useNearestLocations";

const DonateTo = () => {
 
  let { recipientdetails } = useContext(useDetails);
  const [dat, setDat] = useState(null)
  const location = useLocation();
  
  const { bloodgroup, latitude,longitude } = location.state || {};
  const [hidden, setHidden] = useState(false);
  console.log(latitude,longitude)
  let nearestpositions=useNearestLocations(recipientdetails,latitude,longitude)
  const handlerf = (item) => {
    setDat(item);
    
    setHidden(true);
  
  };
  
  return bloodgroup === "O+" ? (
    <>
      {nearestpositions.nearestLocations.map((items, index) => {
        return (
          <div className="dialoge-container" key={index}>
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
              <button
                onClick={() => {
                  handlerf(items);
                }}
                id={index}
              >
                Donate
              </button>
            </div>
          </div>
        );
      })}
      {dat && hidden && (
        <div className="hidden-div">
          <div className="dia-flex">
            <label>Purpose</label>
            <span>
              <label>Accident</label>
            </span>
          </div>
          <div className="dia-flex">
            <label>Contact Number</label>
            <span>
              <label>{dat.Contact}</label>
            </span>
          </div>
          <button className="message">Message</button>
          <Link
            to={{
              pathname: "/Confirm",
              search: `?value1=${dat.Name}&value2=${dat.Location}&value2=${dat.BloodGroup}`,
            }}
          >
            Go to Component 2
          </Link>
        </div>
      )}
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
                <button
                onClick={() => {
                  handlerf(items);
                }}
                id={index}
              >
                Donate
              </button>
              </div>
            </div>
          );
        })}{" "}
      {dat && hidden && (
        <div className="hidden-div">
          <div className="dia-flex">
            <label>Purpose</label>
            <span>
              <label>Accident</label>
            </span>
          </div>
          <div className="dia-flex">
            <label>Contact Number</label>
            <span>
              <label>{dat.Contact}</label>
            </span>
          </div>
          <button className="message">Message</button>
          <Link
            to={{
              pathname: "/Confirm",
              search: `?value1=${dat.Name}&value2=${dat.Location}&value2=${dat.BloodGroup}`,
            }}
          >
            Go to Component 2
          </Link>
        </div>
      )}
    </>
  ) : bloodgroup === "O-" ? (
    <>
      {nearestpositions.nearestLocations
        .filter((result) => {
          if (result.BloodGroup === bloodgroup) return result;
        })
        .map((items, index) => {
          return (
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
                <button
                onClick={() => {
                  handlerf(items);
                }}
                id={index}
              >
                Donate
              </button>
              </div>
            </div>
          );
        })}{" "}
      {dat && hidden && (
        <div className="hidden-div">
          <div className="dia-flex">
            <label>Purpose</label>
            <span>
              <label>Accident</label>
            </span>
          </div>
          <div className="dia-flex">
            <label>Contact Number</label>
            <span>
              <label>{dat.Contact}</label>
            </span>
          </div>
          <button className="message">Message</button>
          <Link
            to={{
              pathname: "/Confirm",
              search: `?value1=${dat.Name}&value2=${dat.Location}&value2=${dat.BloodGroup}`,
            }}
          >
            Go to Component 2
          </Link>
        </div>
      )}
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
                  <button
                onClick={() => {
                  handlerf(items);
                }}
                id={index}
              >
                Donate
              </button>
                </div>
              </div>
            );
          })}{" "}
        {dat && hidden && (
          <div className="hidden-div">
            <div className="dia-flex">
              <label>Purpose</label>
              <span>
                <label>Accident</label>
              </span>
            </div>
            <div className="dia-flex">
              <label>Contact Number</label>
              <span>
                <label>{dat.Contact}</label>
              </span>
            </div>
            <button className="message">Message</button>
            <Link
              to={{
                pathname: "/Confirm",
                search: `?value1=${dat.Name}&value2=${dat.Location}&value3=${dat.BloodGroup}`,
              }}
            >
              Go to Component 2
            </Link>
          </div>
        )}
      </>
    )
  );
};

export default DonateTo;
