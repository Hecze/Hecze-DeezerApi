import React from "react";
import Api from "../components/Api";
import Menu from "../components/Menu";
import SearchEngine from "../components/SearchEngine";
import { useState } from "react";




export default function Home() {


  return (
    <>
      {" "}

      <SearchEngine/>
      <Api/>
    </>
  );
}
