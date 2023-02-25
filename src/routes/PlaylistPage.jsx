import React from "react";
import Menu from "../components/Menu";
import { useParams } from "react-router-dom";
import Playlist from "../components/Playlist";
import { useEffect } from "react";
import SearchEngine from "../components/SearchEngine";

export default function PlaylistPage() {
  const params = useParams();

  return (
    <>
      {" "}
      <SearchEngine />
      <Playlist id={params.id} />
    </>
  );
}
