// src/components/BaytsByChapter.js
import React from "react";
import { useParams } from "react-router-dom";
import bayts from "../../../Data/Motoon/Shatibya/Shatibya";
import{MotoonChaptersTemplate} from "../../../Helper/Templates";
import { useState, useEffect } from "react";
const BaytsByChapter = () => {
    const { chapterId } = useParams(); // Get the chapterId from the URL
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredBayts, setFilteredBayts] = useState([]);
  
    // Filter bayts based on chapterId and searchQuery
    useEffect(() => {
      const filtered = bayts.filter(
        (bayt) =>
          bayt.chapter === parseInt(chapterId) &&
          bayt.notshbayt.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredBayts(filtered);
    }, [bayts, chapterId, searchQuery]);
  
    return (
      <div className="container mt-3">
        <h3>Bayts in Chapter {chapterId}</h3>
  
        {/* Search input */}
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search Bayts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
  
        {/* Display the filtered bayts */}
        {filteredBayts.length === 0 ? (
          <p>No bayts match your search.</p>
        ) : (
          <ul className="list-group">
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
  

export default BaytsByChapter;
