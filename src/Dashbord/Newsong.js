import React, { useState } from "react";
import axios from "axios";

export default function Newsong() {
  const [songData, setSongData] = useState({
    name: "",
    artist: "",
    genre: "",
    link: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSongData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/addsong",
        songData
      );
      console.log(response.data);
      window.location.href = "/admin";
      alert("Song added successfully:");
      // Optionally, you can reset the form fields after successful submission
      setSongData({
        name: "",
        artist: "",
        genre: "",
        link: "",
      });
    } catch (error) {
      console.error("Error adding song:", error);
    }
  };

  return (
    <div className="container">
      <div className="box">
        <form onSubmit={handleSubmit}>
          <label>Song name:</label>
          <br />
          <input
            className="input"
            type="text"
            name="name"
            value={songData.name}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Song Artist:</label>
          <br />
          <input
            className="input"
            type="text"
            name="artist"
            value={songData.artist}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Song Genre:</label>
          <br />
          <input
            className="input"
            type="text"
            name="genre"
            value={songData.genre}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Song Link:</label>
          <br />
          <input
            className="input"
            type="text"
            name="link"
            value={songData.link}
            onChange={handleChange}
          />
          <br />
          <br />
          <div className="button">
            <button className="large-button" type="submit">
              <b>ADD SONG</b>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
