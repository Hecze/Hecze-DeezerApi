import React, { useEffect, useState } from 'react'
import SearchResults from '../components/SearchResults'
import { useParams } from "react-router-dom";
import SearchEngine from '../components/SearchEngine';


export default function SearchResultsPage() {

    //params use state


    const params = useParams();


  return (
    <>
    <SearchEngine/>
    <SearchResults id={params.id}/>
    </>
  )
}
