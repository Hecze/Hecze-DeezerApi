import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeMusic } from "../features/music/musicSlice";

export default function SearchResults(id) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  id = id.id;

  const handleSongClick = (id) => {
    dispatch(changeMusic(id));
  };

  const fetchSearch = async (search) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://deezerdevs-deezer.p.rapidapi.com/search?q=${search}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key":
              "9731d3c7fdmshb9a3ca1af7d67c8p1a98e0jsnbf0ef715d557",
            "Retry-After": 6,
          },
        }
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      setError(error);
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSearch(id);
    console.log("hola buenas tardes" + id);
    return () => {
      window.location.reload();
    };
  }, []);

  return (
    <>
      {loading ? (
        <div class="spinner-border" role="status" id="loading">
          <span class="sr-only"></span>
        </div>
      ) : (
        <div class="searchResults">
          {data.data &&
            data.data.map((item) => (
              <div className="song" onClick={() => handleSongClick(item)}>
                <img src={item.album.cover_big} alt={item.title} />
                <div className="songInfo">
                  <h1 class="title">{item.title}</h1>
                  <p>{item.artist.name}</p>
                </div>
              </div>
            ))}
          ;
        </div>
      )}
    </>
  );
}
