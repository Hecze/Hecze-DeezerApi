import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeMusic } from "../features/music/musicSlice";

export default function Playlist(id) {
  id = id.id;
  const [playlist, setPlaylist] = useState([]);
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  //fetch playlist

  const URL = "https://deezerdevs-deezer.p.rapidapi.com/";
  const CONFIG = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "9731d3c7fdmshb9a3ca1af7d67c8p1a98e0jsnbf0ef715d557",
      "Retry-After": 6,
    },
  };

  const fetchData = () =>
    fetch(URL + "playlist/" + id, CONFIG)
      .then((response) => response.json())
      .then((data) => {
        setPlaylist(data);
        setLoading(false);
        setSongs(data.tracks.data);
        console.log(id);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.log(error, id);
      });

  //console.log(playlist);

  const handleSongClick = (id) => {
    dispatch(changeMusic(id));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div class="spinner-border" role="status" id="loading">
          <span class="sr-only"></span>
        </div>
      ) : (
        <div class="playlist">
          {" "}
          {playlist && (
            <div class="card ">
              <h1>{playlist.title}</h1>
              <img
                src={playlist.picture}
                alt={playlist.title}
                class="card-img-top"
              />
              <p>{playlist.release_date}</p>
              <p>{playlist.label}</p>

              <ul>
                {songs.map((song) => (
                  <li key={song.id} onClick={() => handleSongClick(song)}>
                    {song.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
}
