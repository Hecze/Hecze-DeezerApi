import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SearchEngine() {
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {}, []);

  return (
    <div class="nav-side">
      <form action={"/searchResults/" + search}>
        <i class="bi bi-search"></i>
        <input type="text" class="search" onChange={handleChange} />
      </form>
      <div className="sections">
      <Link  to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
      </div>

    </div>
  );
}
