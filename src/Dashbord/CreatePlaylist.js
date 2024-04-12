import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CreatePlaylist.css";

const CreatePlaylist = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/viewsong");
        setSongs(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchSongs();
  }, []);

  const handleCheckboxChange = (event, song) => {
    const { checked } = event.target;
    if (checked) {
      setSelectedSongs([...selectedSongs, song]);
    } else {
      setSelectedSongs(
        selectedSongs.filter((selectedSong) => selectedSong.id !== song.id)
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/createplaylists", {
        name: playlistName,
        songs: selectedSongs,
      });
      // Redirect or show success message
      window.location.reload();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <h1>Create Playlist</h1>
      {error && <p>Error: {error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="playlistName">Playlist Name:</label>

        <input
          type="text"
          id="playlistName"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          required
        />
        <br />
        <label>Select Songs:</label>

        {songs.map((song) => (
          <div key={song.id}>
            <input
              type="checkbox"
              id={`song-${song.id}`}
              checked={selectedSongs.some(
                (selectedSong) => selectedSong.id === song.id
              )}
              onChange={(event) => handleCheckboxChange(event, song)}
            />
            <label htmlFor={`song-${song.id}`}>{song.name}</label>
            <br />
          </div>
        ))}
        <button type="submit">Create Playlist</button>
      </form>
    </div>
  );
};

export default CreatePlaylist;
