// src/components/BaytsByChapter.js
import React from "react";
import { useParams } from "react-router-dom";
import { getMatnObject } from "../../../Helper/Utils";
//import bayts from "../../../Data/Motoon/Shatibya/Shatibya";
//import bayts from getMatnSourcePath();

//import { MotoonChaptersTemplate } from "../../../Helper/Templates";

import { useState, useEffect } from "react";
import FontResizer from "../../FontResizer";


const BaytsByChapter = () => {
  const { chapterId } = useParams(); // Get the chapterId from the URL
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBayts, setFilteredBayts] = useState([]);
  const cuurentMatn = getMatnObject();
  const bayts = cuurentMatn.bayts

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
    <>
      <style>{`
body {
  direction: rtl;
  text-align: right;
}
`}</style>

      <div className="container mt-3">
        <h3>{cuurentMatn.title+ " - "+"باب "+ cuurentMatn.chapters.filter(x => x.Id == chapterId)[0]?.title}</h3>
        <FontResizer />
        {/* Search input */}
        <input
          type="text"
          className="form-control mb-3"
          placeholder="البحث داخل الأبيات..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Display the filtered bayts */}
        {filteredBayts.length === 0 ? (
          <p>No bayts match your search.</p>
        ) : (
          <ul className="list-group px-0">
            {filteredBayts.map((bayt) => (
              <li key={bayt.Id} className="list-group-item">
                <p>{bayt.bayt}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};


export default BaytsByChapter;
