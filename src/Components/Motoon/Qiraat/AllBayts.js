// src/components/AllBaytsSearch.js
import React, { useState } from "react";
import { getMatnObject } from "../../../Helper/Utils";
import FontResizer from "../../FontResizer";
//import bayts from "../../../Data/Motoon/Shatibya/Shatibya";


const AllBayts = () => {
  const cuurentMatn = getMatnObject();
  const bayts = cuurentMatn.bayts
  const audioPath = cuurentMatn.audios[0]?.audioPath;
  
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBayts = bayts.filter((bayt) =>
    bayt.notshbayt.includes(searchQuery)
  );

  return (
    <>
    <style>{`
body {
  direction: rtl;
  text-align: right;
}
`}</style>
      <div className="container mt-3">
        <h1 className="text-center mt-5">
          {cuurentMatn.title}
        </h1>
        <h3 className="text-center">
          {cuurentMatn.description}
          {/* بصوت الشيخ طه الفهد */}
          </h3>
          <h4 className="text-center font-italic">
          {cuurentMatn.author}
          {/* بصوت الشيخ طه الفهد */}
          </h4>
         
        <audio controls autoplay className="mt-3 w-100">
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
            تحميل {cuurentMatn.title} بصوت 
            
{" "+cuurentMatn.audios[0]?.qariName}
        </a>
        </div>

        <h3 className="mt-3 mb-3">المتن كاملا Full poem</h3>
        <FontResizer/>
        <input
          type="text"
          className="form-control"
          placeholder="Search for bayts... البحث داخل الأبيات"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {filteredBayts.length === 0 ? (
          <p>No bayts match your search.</p>
        ) : (
          <ul className="list-group px-0 mt-3">
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
