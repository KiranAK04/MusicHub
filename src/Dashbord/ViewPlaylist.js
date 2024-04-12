import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ViewPlaylist.css";

const ViewPlaylist = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/viewplaylists") // Replace '/api/playlists' with your API endpoint
      .then((response) => {
        console.log(response.data); // Log the response data to the console
        setPlaylists(response.data); // Assuming response.data is an array of playlists
      })
      .catch((error) => {
        console.error("Error fetching playlists:", error);
      });
  }, []);

  return (
    <div className="container">
      <div className="box">
        <table border="2" className="table">
          <thead className="display">
            <tr>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {playlists.map((playlist) => (
              <tr key={playlist.id}>
                <td>{playlist.id}</td>
                <td>
                  <ul>
                    {playlist.songs.map((song) => (
                      <li key={song.id}>
                        <span>{song.name}</span>
                        <br></br>
                        <br></br>
                        <audio controls>
                          <source src={song.link} />
                        </audio>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewPlaylist;
