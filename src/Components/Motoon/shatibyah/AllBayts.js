// src/components/AllBaytsSearch.js
import React, { useState } from "react";
import bayts from "../../../Data/Motoon/Shatibya/Shatibya";
const AllBayts = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBayts = bayts.filter((bayt) =>
    bayt.notshbayt.includes(searchQuery)
  );

  return (
    <div className="container mt-3">
      <h3>Search Bayts in Poem</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Search for bayts"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredBayts.length === 0 ? (
        <p>No bayts match your search.</p>
      ) : (
        <ul className="list-group mt-3">
          {filteredBayts.map((bayt) => (
            <li key={bayt.Id} className="list-group-item">
              <p>{bayt.bayt}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllBayts;
