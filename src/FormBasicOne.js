import React, { useState } from "react";
import "./App.css";

const FormBasicOne = () => {
  const [formData, setFormDat] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    state: "",
    address: "",
  });

  const handelInputs = (event) => {
    setFormDat({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  // console.log(formData)

  return (
    <div className="fomr-containe">
      <div className="container">
        <h1>Form Basics</h1>
        <form onSubmit={(event) => handelSubmit(event)}>
          <div className="formconatiner">
            <label>User Name</label>
            <input
              type="text"
              name="username"
              className="formcontrol"
              value={formData.username}
              onChange={(event) => handelInputs(event)}
            />
          </div>
          <div className="formconatiner">
            <label>User Email</label>
            <input
              type="email"
              name="email"
              className="formcontrol"
              value={formData.email}
              onChange={(event) => handelInputs(event)}
            />
          </div>
          <div className="formconatiner">
            <label>User Password</label>
            <input
              type="password"
              name="password"
              className="formcontrol"
              value={formData.password}
              onChange={(event) => handelInputs(event)}
            />
          </div>
          <div className="formconatiner-2">
            <label>Gender: </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={(event) => handelInputs(event)}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={(event) => handelInputs(event)}
              />
              Male
            </label>
          </div>
          <div className="formconatiner">
            <label>Select State</label>
            <select
              name="state"
              className="formcontroll"
              onChange={(event) => handelInputs(event)}
            >
              <option value="">--select state--</option>
              <option value="Odish">Odish</option>
              <option value="Andhraprades">Andhraprades</option>
              <option value="Telangana">Telangana</option>
              <option value="NewDeli">NewDeli</option>
              <option value="Tamilnadu">Tamilnadu</option>
              <option value="WesBalgaol">WesBalgaol</option>
            </select>
          </div>
          <div className="formconatiner">
            <label>Address</label>
            <textarea
              name="address"
              onChange={(event) => handelInputs(event)}
              value={formData.address}
              className="formcontroll"
            ></textarea>
          </div>
          <div className="formconatiner">
            <button type="submit" value="Register" className="button">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormBasicOne;
