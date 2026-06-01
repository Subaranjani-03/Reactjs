import React, { createContext, useState } from "react";
import Container from "./Container";

export const formDetails = createContext();

// export const theme = createContext()

const Main = () => {


  const [formValue, setFormValue] = useState({
    name: "",
    phone: '',
    email: "",
    address: "",
  });

  const [color,setColor] = useState('dark')

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);

    setFormValue({
      name: "",
      phone: "",
      email: "",
      address: "",
    });
  };

  let obj={
    formValue,
    color,
    setColor
  }

  return (
    <div className="main">
      Form
      <div className="form-box">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) =>
              setFormValue({ ...formValue, name:e.target.value})
            }
            value={formValue.name}
            placeholder="enter your name"
          />{" "}
          <br />
          <input
            type="number"
            onChange={(e) =>
              setFormValue({ ...formValue, phone: Number(e.target.value) })
            }
            value={formValue.phone}
            placeholder="enter your phone number"
          />
          <br />
          <input
            type="email"
            onChange={(e) =>
              setFormValue({ ...formValue, email: e.target.value })
            }
            value={formValue.email}
            placeholder="enter your email"
          />
          <br />
          <textarea
            name="address"
            onChange={(e) =>
              setFormValue({ ...formValue, address: e.target.value })
            }
            value={formValue.address}
            placeholder="ener your address"
          ></textarea>
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
      <formDetails.Provider value={obj}>
        <Container />
      </formDetails.Provider>
    </div>
  );
};

export default Main;
