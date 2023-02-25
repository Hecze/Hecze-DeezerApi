import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeMusic } from "../features/music/musicSlice";

export default function Favorites() {
  const [songs, setSongs] = useState([]);
  const dispatch = useDispatch();

  //get songs from local storage

  const handleSongClick = (id) => {
    dispatch(changeMusic(id));
  };

  useEffect(() => {
    let songs = [];
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let song = JSON.parse(localStorage.getItem(key));
      songs.push(song);
    }
    setSongs(songs);
  }, []);

  return (

    <div class="searchResults">
    {songs.map((item) => (
        <div className="song" onClick={() => handleSongClick(item)}>
          <img src={item.album.cover} alt={item.title} />
          <div className="songInfo">
          <h1 class="title">{item.title}</h1>
          <p>{item.artist.name}</p>
          </div>
        </div>
      ))}
    ;
  </div>

  );
}
