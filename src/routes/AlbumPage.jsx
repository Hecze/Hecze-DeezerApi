import React from "react";
import Menu from "../components/Menu";
import { useParams } from "react-router-dom";
import Album from "../components/Album";
import SearchEngine from "../components/SearchEngine";

export default function AlbumPage() {
  const params = useParams();
  return (
    <>
      {" "}
      <SearchEngine/>
      <Album id={params.id} />
    </>
  );
}
