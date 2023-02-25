import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Song() {
  const music = useSelector((state) => state.music);
  const audio = new Audio(music.music.preview);
  const [clicked, setClicked] = useState(false);

  //create mp3 player

  const play = () => {
    if (audio) {
      audio.play();
    } else {
      console.log("no audio");
    }
  };

  const pause = () => {
    if (audio) {
      audio.pause();
    } else {
      console.log("no audio");
    }
  };

  const saveSong = () => {
    //save song to local storage}

    if (clicked) {
      localStorage.removeItem(music.music.title);
      console.log(music.music.title + " removed");
      setClicked(false);
      return;
    } else {
      localStorage.setItem(music.music.title, JSON.stringify(music.music));
      console.log(music.music.title + " saved");
      setClicked(true);
      return;
    }
  };

  //stop playing when song changes

  //clean all songs when component unmounts

  useEffect(() => {
    //console.log(music)
    play();
    return () => {
      pause();
    };
  }, [music]);

  return (
    <>
      {music.music.title && (
        <nav class="track-player">
          <div>reproducing: {music.music.title}</div>
          <i onClick={play} class="bi bi-play-circle-fill"></i>
          <i onClick={pause} class="bi bi-pause-circle-fill"></i>
          {clicked ? (
            <i onClick={saveSong} class="bi bi-star-fill"></i>
          ) : (
            <i onClick={saveSong} class="bi bi-star"></i>
          )}

        </nav>
      )}
    </>
  );
}
