import React, { useState } from "react";
import "./Form.css";

const Form = () => {

  let [name,setName] = useState("")
  let [gender,setGender] = useState("")
  let [graduation,setGraduation] = useState("")
  let [address,setAddress] = useState("")
  let [course,setCourse] = useState("")
  let [bgcolor, setBgColor] = useState("");

  const handleGraduation = (e) => {
  setGraduation((prev) => {
    return prev + " " + e.target.value;
  });
};

  return (
    <div className="container">
      <form action="">
        <h2>Registration Form</h2>
        <label htmlFor="name">Name</label>
        <input type="text" onChange={(e)=>setName(e.target.value)} name="name" id="name" />

        <label>Gender</label>
        <div className="radio-group">
          <div className="option">
            <input type="radio" onChange={(e)=>setGender(e.target.value)} name="gender" value="Male" />
            <span>Male</span>
          </div>
          <div className="option">
            <input type="radio" onChange={(e)=>setGender(e.target.value)} name="gender" value="Female" />
            <span>Female</span>
          </div>
        </div>

        <label>Graduation</label>
        <div className="checkbox-group">
          <div className="option">
            <input type="checkbox" onChange={handleGraduation} name="graduation" value="BSC" />
            <span>BSC</span>
          </div>
          <div className="option">
            <input type="checkbox" onChange={handleGraduation} name="graduation" value="MSC" />
            <span>MSC</span>
          </div>
        </div>

        <label htmlFor="address">Address</label>
        <textarea name="address" onChange={(e)=>setAddress(e.target.value)} id="address"></textarea>

        <label htmlFor="course">Course</label>
        <select name="course" id="course" onChange={(e)=>setCourse(e.target.value)}>
          <option value="Select">Select</option>
          <option value="FSD">FSD</option>
          <option value="UIUX">UIUX</option>
        </select>

        <label htmlFor="color">Choose Bg Color</label>
        <input type="color" name="color" id="color" onChange={(e) => setBgColor(e.target.value)}/>
      </form>

      <div className="card"  style={{ backgroundColor: bgcolor }}>
        <h2>Details</h2>
          <h3>Name : {name}</h3>
          <h3>Gender : {gender}</h3>
          <h3>Graduation : {graduation}</h3>
          <h3>Address : {address}</h3>
          <h3>Course : {course}</h3>
      </div>
    </div>
  );
};

export default Form;
