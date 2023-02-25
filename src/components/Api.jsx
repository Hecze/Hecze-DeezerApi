import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import frontpage from "../frontpage.png";

function Api() {
  const [popular, setPopular] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const albumsList = [
    "70130862",
    "182811182",
    "70130372",
    "3719741",
    "536294",
    "8992445",
    "110096332",
  ];

  const popularList = [
    "10257749162",
    "10257788502",
    "1467063127",
    "10257799782",
    "10091695222",
    "10257758942",
    "10257816522",
  ];

  const artistsList = [
    "112",
    "997",
    "11",
    "848",
    "860",
    "9315",
    "17317",
    "4345",
    "133049",
    "8548",
    "6123",
  ];

  const URL = "https://deezerdevs-deezer.p.rapidapi.com/";
  const CONFIG = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "9731d3c7fdmshb9a3ca1af7d67c8p1a98e0jsnbf0ef715d557",
      "Retry-After": 6,
    },
  };

  const fetchAlbums = async (albumList) => {
    setLoading(true);
    const promises = albumList.map((album) => {
      return fetch(`${URL}album/${album}`, CONFIG)
        .then((response) => response.json())
        .catch((error) => {
          setError(error);
        });
    });

    const data = await Promise.all(promises);
    setAlbums(data);
  };

  const fetchPopular = async (popularList) => {
    setLoading(true);
    const promises = popularList.map((album) => {
      return fetch(`${URL}playlist/${album}`, CONFIG)
        .then((response) => response.json())
        .catch((error) => {
          setError(error);
        });
    });

    const data = await Promise.all(promises);
    setPopular(data);
  };

  const fetchArtists = async (artistsList) => {
    setLoading(true);
    const promises = artistsList.map((artist) => {
      return fetch(`${URL}artist/${artist}`, CONFIG)
        .then((response) => response.json())
        .catch((error) => {
          setError(error);
        });
    });

    const data = await Promise.all(promises);
    console.log(data);
    setArtists(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchAlbums(albumsList);
    fetchPopular(popularList);
    fetchArtists(artistsList);
  }, []);

  return (
    <>
      {loading ? (
        <div class="spinner-border" role="status" id="loading">
          <span class="sr-only"></span>
        </div>
      ) : (
        <div>
          <div class="frontpage">
            <img src={frontpage} alt="no se encontró" />
          </div>

          <h1 class="section">Albums:</h1>
          <div class="wrapper">
            {albums.map((album) => (
              <Link to={"/album/" + album.id} class="item">
                <div key={album.id}>
                  <img src={album.cover_medium} alt={album.title} class="" />
                  <p class="title">{album.title}</p>
                </div>
              </Link>
            ))}
          </div>
          <h1 class="section">Popular now:</h1>
          <div class="wrapper">
            {popular.map((album) => (
              <Link to={"/playlist/" + album.id} class="item">
                <div key={album.id}>
                  <img src={album.picture} alt={album.title} class="" />
                  <p class="title">{album.title}</p>
                </div>
              </Link>
            ))}
          </div>

          <h1 class="section">Artists:</h1>
          <div class="wrapper">
            {artists.map((artist) => (
              <Link to={"/searchResults/" + artist.name} class="item-artist">
                <div key={artist.id}>
                  <img src={artist.picture} alt={artist.name} class="" />
                  <p class="title">{artist.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Api;
