import React from "react";
import { useParams } from "react-router-dom";
import Menu from "../components/Menu";

export default function Music() {

  const params = useParams();

  return (
    <>
      {" "}
      <Menu />
      <div>Music {params.id}</div>
    </>
  );
}
