import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Viewsong.css";

export default function ViewSong() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/viewsong");
        console.log(response.data);
        setSongs(response.data);
      } catch (error) {
        console.log("Error occured while fetching songs");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="page-title">Songs</h1>
      <div className="song-list">
        {songs.length === 0 ? (
          <p className="no-songs">No songs available</p>
        ) : (
          <ul>
            {songs.map((song) => (
              <li key={song.id} className="song-item">
                <div className="song-info">
                  <div className="song-details">
                    <h4 className="song-name">Song: {song.name}</h4>
                    <p className="artist">Artist: {song.artist}</p>
                    <p className="genre">Genre: {song.genre}</p>
                  </div>
                </div>
                <audio controls className="audio-player">
                  <source src={song.link} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
