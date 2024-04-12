import React, { useState } from "react";
import axios from "axios";
import "./Registration.css";
const Registration = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    role: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/registration",
        formData
      );
      console.log(response.data); // Assuming your backend responds with some data
      window.location.href = "/login";
      alert("Registration successful!");
      setFormData({
        username: "",
        email: "",
        password: "",
        gender: "",
        role: "",
        address: "",
      });
    } catch (error) {
      console.error("Error occurred:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Registration Form</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>*Username :</label>
          <input
            className="input"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>*Email :</label>
          <input
            className="input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>*Password :</label>
          <input
            className="input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>*Gender :</label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleInputChange}
            required
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleInputChange}
            required
          />{" "}
          Female
          <input
            type="radio"
            name="gender"
            value="other"
            onChange={handleInputChange}
            required
          />{" "}
          Other
        </div>
        <div className="form-group">
          <label>*Role :</label>
          <input
            type="radio"
            name="role"
            value="admin"
            onChange={handleInputChange}
            required
          />{" "}
          Admin
          <input
            type="radio"
            name="role"
            value="customer"
            onChange={handleInputChange}
            required
          />{" "}
          Customer
        </div>
        <div className="form-group">
          <label>*Address :</label>
          <textarea
            rows="4"
            cols="45"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit">
            <b>REGISTER</b>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
