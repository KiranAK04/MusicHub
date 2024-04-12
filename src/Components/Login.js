import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
export default function Login() {
  const [nameorEmail, setnameorEmail] = useState("");

  const [password, setpassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "http://localhost:8080/api/loginrequest",
      {
        nameorEmail,
        password,
      }
    );
    console.log(response);
    if (response.data === "adminhome") {
      window.location.href = "/admin";
    } else if (response.data === "customerhome") {
      window.location.href = "/customer";
    } else {
      alert("unknown User");
    }
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleSubmit}>
        <h2>User login:</h2>
        <div className="form-group">
          <label>Username :</label>
          <input
            type="text"
            name="nameorEmail"
            placeholder="Name Or Email"
            onChange={(e) => {
              setnameorEmail(e.target.value);
            }}
          ></input>
        </div>
        <div className="form-group">
          <label>Password :</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          ></input>
        </div>
        <div className="form-group">
          <input type="submit" value="SUBMIT"></input>
        </div>
      </form>
    </div>
  );
}
