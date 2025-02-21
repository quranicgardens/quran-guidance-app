// src/components/AllBaytsSearch.js
import React, { useState } from "react";
import bayts from "../../../Data/Motoon/Shatibya/Shatibya";
const audioPath = 'https://ia903005.us.archive.org/18/items/shatibyyah/shatibyyah.mp3'; // Replace with actual path

const AllBayts = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBayts = bayts.filter((bayt) =>
    bayt.notshbayt.includes(searchQuery)
  );

  return (
    <>
    <div className="container mt-3">
      <h1 className="text-center mt-5">الشاطبية</h1>
      <h2 className="text-center">بصوت الشيخ طه الفهد</h2>
    
      <audio controls autoplay >
  <source src={audioPath} type="audio/mp3" />
 
Your browser does not support the audio element.
</audio>
      {/* Download Button */}
      <div className="mt-3">
        <a
          href={audioPath} // Replace with actual path
          download
          className="btn btn-primary"
        >
          تحميل الشاطبية بصوت الشيخ طه الفهد
        </a>
      </div>
    
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
    </>
  );
};

export default AllBayts;
