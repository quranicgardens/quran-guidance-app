// import React, { useState } from "react";

// // Sample surah data
// const surahs = [
//   {
//     number: 1,
//     name: {
//       ar: "الفاتحة",
//       en: "The Opening",
//       transliteration: "Al-Fatihah",
//     },
//     revelation_place: {
//       ar: "مكية",
//       en: "meccan",
//     },
//     verses_count: 7,
//     verses: [
//       {
//         number: 1,
//         text: {
//           ar: "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ",
//           en: "In the name of Allah, the Entirely Merciful, the Especially Merciful",
//         },
//       },
//       {
//         number: 2,
//         text: {
//           ar: "ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ",
//           en: "[All] praise is [due] to Allah, Lord of the worlds",
//         },
//       },
//       // More verses...
//     ],
//   },
//   // More surahs...
// ];

// const QuranSearch = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [results, setResults] = useState([]);

//   const handleSearch = () => {
//     const lowerCaseSearchTerm = searchTerm.toLowerCase();
//     const filteredResults = [];

//     surahs.forEach((surah) => {
//       surah.verses.forEach((verse) => {
//         if (verse.text.en.toLowerCase().includes(lowerCaseSearchTerm)) {
//           filteredResults.push({
//             surahName: surah.name.en,
//             verseNumber: verse.number,
//             verseText: verse.text.en,
//           });
//         }
//       });
//     });

//     setResults(filteredResults);
//   };

//   return (
//     <div>
//       <h1>Quran Verse Search</h1>
//       <input
//         type="text"
//         placeholder="Search for a word..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>

//       {results.length > 0 ? (
//         <div>
//           <h2>Search Results:</h2>
//           <ul>
//             {results.map((result, index) => (
//               <li key={index}>
//                 <strong>{result.surahName}</strong> (Verse {result.verseNumber}):{" "}
//                 {result.verseText}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>No results found.</p>
//       )}
//     </div>
//   );
// };

// export default QuranSearch;

// import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

// // Sample surah data
// const surahs = [
//   {
//     number: 1,
//     name: {
//       ar: "الفاتحة",
//       en: "The Opening",
//       transliteration: "Al-Fatihah",
//     },
//     revelation_place: {
//       ar: "مكية",
//       en: "meccan",
//     },
//     verses_count: 7,
//     verses: [
//       {
//         number: 1,
//         text: {
//           ar: "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ",
//           en: "In the name of Allah, the Entirely Merciful, the Especially Merciful",
//         },
//       },
//       {
//         number: 2,
//         text: {
//           ar: "ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ",
//           en: "[All] praise is [due] to Allah, Lord of the worlds",
//         },
//       },
//       // More verses...
//     ],
//   },
//   // More surahs...
// ];

// const QuranSearch = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchBy, setSearchBy] = useState("en"); // "en" for English, "ar" for Arabic
//   const [results, setResults] = useState([]);

//   const handleSearch = () => {
//     const lowerCaseSearchTerm = searchTerm.toLowerCase();
//     const filteredResults = [];

//     surahs.forEach((surah) => {
//       surah.verses.forEach((verse) => {
//         const verseText =
//           searchBy === "en" ? verse.text.en : verse.text.ar; // Check based on search language
//         if (verseText.toLowerCase().includes(lowerCaseSearchTerm)) {
//           filteredResults.push({
//             surahName: surah.name.en,
//             verseNumber: verse.number,
//             verseText: verseText,
//             language: searchBy === "en" ? "English" : "Arabic", // Display language
//           });
//         }
//       });
//     });

//     setResults(filteredResults);
//   };

//   return (
//     <div className="container mt-4">
//       <h1 className="text-center">Quran Verse Search</h1>
//       <div className="row mb-3">
//         <div className="col-md-8 mx-auto">
//           <div className="input-group">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search for a word..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <button className="btn btn-primary" onClick={handleSearch}>
//               Search
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="row mb-3">
//         <div className="col-md-8 mx-auto">
//           <div className="form-check">
//             <input
//               className="form-check-input"
//               type="radio"
//               name="searchBy"
//               id="searchByEn"
//               value="en"
//               checked={searchBy === "en"}
//               onChange={() => setSearchBy("en")}
//             />
//             <label className="form-check-label" htmlFor="searchByEn">
//               Search by English Translation
//             </label>
//           </div>
//           <div className="form-check">
//             <input
//               className="form-check-input"
//               type="radio"
//               name="searchBy"
//               id="searchByAr"
//               value="ar"
//               checked={searchBy === "ar"}
//               onChange={() => setSearchBy("ar")}
//             />
//             <label className="form-check-label" htmlFor="searchByAr">
//               Search by Arabic Verse
//             </label>
//           </div>
//         </div>
//       </div>

//       {results.length > 0 ? (
//         <div>
//           <h2>Search Results:</h2>
//           <ul className="list-group">
//             {results.map((result, index) => (
//               <li key={index} className="list-group-item">
//                 <strong>{result.surahName}</strong> (Verse {result.verseNumber}){" "}
//                 <em>({result.language})</em>: <br />
//                 <span>{result.verseText}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>No results found.</p>
//       )}
//     </div>
//   );
// };

// export default QuranSearch;


// import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

// // Sample surah data
// const surahs = [
//   {
//     number: 1,
//     name: {
//       ar: "الفاتحة",
//       en: "The Opening",
//       transliteration: "Al-Fatihah",
//     },
//     revelation_place: {
//       ar: "مكية",
//       en: "meccan",
//     },
//     verses_count: 7,
//     verses: [
//       {
//         number: 1,
//         text: {
//           ar: "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ",
//           en: "In the name of Allah, the Entirely Merciful, the Especially Merciful",
//         },
//       },
//       {
//         number: 2,
//         text: {
//           ar: "ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ",
//           en: "[All] praise is [due] to Allah, Lord of the worlds",
//         },
//       },
//       // More verses...
//     ],
//   },
//   // More surahs...
// ];

// const QuranSearch = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [results, setResults] = useState([]);

//   const handleSearch = () => {
//     const lowerCaseSearchTerm = searchTerm.toLowerCase();
//     const filteredResults = [];

//     surahs.forEach((surah) => {
//       surah.verses.forEach((verse) => {
//         const englishMatch = verse.text.en.toLowerCase().includes(lowerCaseSearchTerm);
//         const arabicMatch = verse.text.ar.toLowerCase().includes(lowerCaseSearchTerm);

//         if (englishMatch || arabicMatch) {
//           filteredResults.push({
//             surahNameAr: surah.name.ar,
//             surahNameEn: surah.name.en,
//             verseNumber: verse.number,
//             verseTextAr: verse.text.ar,
//             verseTextEn: verse.text.en,
//           });
//         }
//       });
//     });

//     setResults(filteredResults);
//   };

//   return (
//     <div className="container mt-4">
//       <h1 className="text-center">Quran Verse Search</h1>
//       <div className="row mb-3">
//         <div className="col-md-8 mx-auto">
//           <div className="input-group">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search for a word..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <button className="btn btn-primary" onClick={handleSearch}>
//               Search
//             </button>
//           </div>
//         </div>
//       </div>

//       {results.length > 0 ? (
//         <div>
//           <h2>Search Results:</h2>
//           <ul className="list-group">
//             {results.map((result, index) => (
//               <li key={index} className="list-group-item">
//                 <strong>{result.surahNameEn} ({result.surahNameAr})</strong> (Verse {result.verseNumber}): <br />
//                 <span><strong>Arabic:</strong> {result.verseTextAr}</span><br />
//                 <span><strong>English:</strong> {result.verseTextEn}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>No results found.</p>
//       )}
//     </div>
//   );
// };

// export default QuranSearch;



// import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { getAllSurahsWithAyat } from "../../Helper/Utils";

// const surahs = getAllSurahsWithAyat()

// const QuranSearch = () => {
    
//   const [searchTerm, setSearchTerm] = useState("");
//   const [results, setResults] = useState([]);
//   const [selectedIndex, setSelectedIndex] = useState(null); // Track selected result index

//   const handleSearch = (e) => {
//     const lowerCaseSearchTerm = e.target.value.toLowerCase();
//     setSearchTerm(e.target.value); // Update search term

//     const filteredResults = [];

//     surahs.forEach((surah) => {
//       surah.verses.forEach((verse) => {
//         const englishMatch = verse.text.en.toLowerCase().includes(lowerCaseSearchTerm);
//         const arabicMatch = verse.text.ar.toLowerCase().includes(lowerCaseSearchTerm);

//         if (englishMatch || arabicMatch) {
//           filteredResults.push({
//             surahNameAr: surah.name.ar,
//             surahNameEn: surah.name.en,
//             verseNumber: verse.number,
//             verseTextAr: verse.text.ar,
//             verseTextEn: verse.text.en,
//           });
//         }
//       });
//     });

//     setResults(filteredResults); // Update results
//     setSelectedIndex(null); // Reset selected index after search
//   };

//   const handleResultClick = (index) => {
//     setSelectedIndex(index); // Update the selected index
//   };

//   return (
//     <div className="container mt-4">
//       <h1 className="text-center">Quran Verse Search</h1>
//       <div className="row mb-3">
//         <div className="col-md-8 mx-auto">
//           <div className="input-group">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search for a word..."
//               value={searchTerm}
//               onChange={handleSearch} // Perform search on input change
//             />
//           </div>
//         </div>
//       </div>

//       {results.length > 0 ? (
//         <div>
//           <h2>Search Results:</h2>
//           <ul className="list-group">
//             {results.map((result, index) => (
//               <li
//                 key={index}
//                 className={`list-group-item ${
//                   selectedIndex === index ? "bg-warning" : ""
//                 }`} // Highlight the selected result
//                 onClick={() => handleResultClick(index)} // Handle click to select result
//                 style={{ cursor: "pointer" }} // Make the result clickable
//               >
//                 <strong>{result.surahNameEn} ({result.surahNameAr})</strong> (Verse {result.verseNumber}): <br />
//                 <span><strong>Arabic:</strong> {result.verseTextAr}</span><br />
//                 <span><strong>English:</strong> {result.verseTextEn}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>No results found.</p>
//       )}
//     </div>
//   );
// };

// export default QuranSearch;


// import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

// import { getAllSurahsWithAyat } from "../../Helper/Utils";

// const surahs = getAllSurahsWithAyat()
// const QuranSearch = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [results, setResults] = useState([]);
//   const [selectedIndex, setSelectedIndex] = useState(null); // Track selected result index

//   const handleSearch = () => {
//     const lowerCaseSearchTerm = searchTerm.toLowerCase();
//     const filteredResults = [];

//     surahs.forEach((surah) => {
//       surah.verses.forEach((verse) => {
//         const englishMatch = verse.text.en.toLowerCase().includes(lowerCaseSearchTerm);
//         const arabicMatch = verse.text.ar.toLowerCase().includes(lowerCaseSearchTerm);

//         if (englishMatch || arabicMatch) {
//           filteredResults.push({
//             surahNameAr: surah.name.ar,
//             surahNameEn: surah.name.en,
//             verseNumber: verse.number,
//             verseTextAr: verse.text.ar,
//             verseTextEn: verse.text.en,
//           });
//         }
//       });
//     });

//     setResults(filteredResults);
//     setSelectedIndex(null); // Reset selected index after search
//   };

//   const handleResultClick = (index) => {
//     setSelectedIndex(index); // Update the selected index
//   };

//   return (
//     <div className="container mt-4">
//       <h1 className="text-center">Quran Verse Search</h1>
//       <div className="row mb-3">
//         <div className="col-md-8 mx-auto">
//           <div className="input-group">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search for a word..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <button className="btn btn-primary" onClick={handleSearch}>
//               Search
//             </button>
//           </div>
//         </div>
//       </div>

//       {results.length > 0 ? (
//         <div>
//           <h2>Search Results:</h2>
//           <ul className="list-group">
//             {results.map((result, index) => (
//               <li
//                 key={index}
//                 className={`list-group-item ${
//                   selectedIndex === index ? "bg-warning" : ""
//                 }`} // Highlight the selected result
//                 onClick={() => handleResultClick(index)} // Handle click to select result
//                 style={{ cursor: "pointer" }} // Make the result clickable
//               >
//                 <strong>{result.surahNameEn} ({result.surahNameAr})</strong> (Verse {result.verseNumber}): <br />
//                 <span><strong>Arabic:</strong> {result.verseTextAr}</span><br />
//                 <span><strong>English:</strong> {result.verseTextEn}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>No results found.</p>
//       )}
//     </div>
//   );
// };

// export default QuranSearch;


// import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { getAllSurahsWithAyat } from "../../Helper/Utils";

// const surahs = getAllSurahsWithAyat();

// const QuranSearch = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [results, setResults] = useState([]);
//   const [selectedIndex, setSelectedIndex] = useState(null); // Track selected result index
//   const [loading, setLoading] = useState(false); // Track loading state

//   const handleSearch = () => {
//     setLoading(true); // Set loading to true when search begins
//     const lowerCaseSearchTerm = searchTerm.toLowerCase();
//     const filteredResults = [];

//     surahs.forEach((surah) => {
//       surah.verses.forEach((verse) => {
//         const englishMatch = verse.text.en.toLowerCase().includes(lowerCaseSearchTerm);
//         const arabicMatch = verse.text.ar.toLowerCase().includes(lowerCaseSearchTerm);

//         if (englishMatch || arabicMatch) {
//           filteredResults.push({
//             surahNameAr: surah.name.ar,
//             surahNameEn: surah.name.en,
//             verseNumber: verse.number,
//             verseTextAr: verse.text.ar,
//             verseTextEn: verse.text.en,
//           });
//         }
//       });
//     });

//     setResults(filteredResults);
//     setLoading(false); // Set loading to false once search is complete
//     setSelectedIndex(null); // Reset selected index after search
//   };

//   // Handle search when Enter key is pressed
//   const handleKeyPress = (event) => {
//     if (event.key === "Enter") {
//       handleSearch();
//     }
//   };

//   const handleResultClick = (index) => {
//     setSelectedIndex(index); // Update the selected index
//   };

//   return (
//     <div className="container mt-4">
//       <h1 className="text-center">Quran Verse Search</h1>
//       <div className="row mb-3">
//         <div className="col-md-8 mx-auto">
//           <div className="input-group">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search for a word..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               onKeyDown={handleKeyPress} // Add event listener for Enter key press
//             />
//             <button className="btn btn-primary" onClick={handleSearch}>
//               Search
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Show loading state while searching */}
//       {loading ? (
//         <div className="text-center">
//           <div className="spinner-border" role="status">
//             <span className="sr-only">Loading...</span>
//           </div>
//         </div>
//       ) : results.length > 0 ? (
//         <div>
//           <h2>Search Results:</h2>
//           <ul className="list-group">
//             {results.map((result, index) => (
//               <li
//                 key={index}
//                 className={`list-group-item ${selectedIndex === index ? "bg-warning" : ""}`}
//                 onClick={() => handleResultClick(index)} // Handle click to select result
//                 style={{ cursor: "pointer" }} // Make the result clickable
//               >
//                 <strong>{result.surahNameEn} ({result.surahNameAr})</strong> (Verse {result.verseNumber}): <br />
//                 <span><strong>Arabic:</strong> {result.verseTextAr}</span><br />
//                 <span><strong>English:</strong> {result.verseTextEn}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>No results found.</p>
//       )}
//     </div>
//   );
// };

// export default QuranSearch;


// import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { getAllSurahsWithAyat } from "../../Helper/Utils";

// const surahs = getAllSurahsWithAyat();

// const QuranSearch = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [results, setResults] = useState([]);
//   const [selectedIndex, setSelectedIndex] = useState(null); // Track selected result index
//   const [loading, setLoading] = useState(false); // Track loading state

//   const handleSearch = () => {
//     setLoading(true); // Set loading to true when search begins
//     const lowerCaseSearchTerm = searchTerm.toLowerCase();
//     const filteredResults = [];

//     surahs.forEach((surah) => {
//       surah.verses.forEach((verse) => {
//         const englishMatch = verse.text.en.toLowerCase().includes(lowerCaseSearchTerm);
//         const arabicMatch = verse.text.ar.toLowerCase().includes(lowerCaseSearchTerm);

//         if (englishMatch || arabicMatch) {
//           filteredResults.push({
//             surahNameAr: surah.name.ar,
//             surahNameEn: surah.name.en,
//             verseNumber: verse.number,
//             verseTextAr: verse.text.ar,
//             verseTextEn: verse.text.en,
//           });
//         }
//       });
//     });

//     setResults(filteredResults);
//     setLoading(false); // Set loading to false once search is complete
//     setSelectedIndex(null); // Reset selected index after search
//   };

//   // Handle search when Enter key is pressed
//   const handleKeyPress = (event) => {
//     if (event.key === "Enter") {
//       handleSearch();
//     }
//   };

//   const handleResultClick = (index) => {
//     setSelectedIndex(index); // Update the selected index
//   };

//   return (
//     <div className="container mt-4">
//       <h1 className="text-center">Quran Verse Search</h1>
//       <div className="row mb-3">
//         <div className="col-md-8 mx-auto">
//           <div className="input-group">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search for a word..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               onKeyDown={handleKeyPress} // Add event listener for Enter key press
//             />
//             <button className="btn btn-primary" onClick={handleSearch}>
//               Search
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Show loading state while searching */}
//       {loading ? (
//         <div className="text-center">
//           <div className="spinner-border" role="status">
//             <span className="sr-only">Loading...</span>
//           </div>
//         </div>
//       ) : (
//         <>
//           {/* Show result count */}
//           <div className="text-center mt-3">
//             {results.length > 0 ? (
//               <p><strong>{results.length}</strong> result{results.length > 1 ? 's' : ''} found</p>
//             ) : (
//               <p>No results found.</p>
//             )}
//           </div>

//           {/* Display search results */}
//           {results.length > 0 && (
//             <div>
//               <h2>Search Results:</h2>
//               <ul className="list-group">
//                 {results.map((result, index) => (
//                   <li
//                     key={index}
//                     className={`list-group-item ${selectedIndex === index ? "bg-warning" : ""}`}
//                     onClick={() => handleResultClick(index)} // Handle click to select result
//                     style={{ cursor: "pointer" }} // Make the result clickable
//                   >
//                     <strong>{result.surahNameEn} ({result.surahNameAr})</strong> (Verse {result.verseNumber}): <br />
//                     <span><strong>Arabic:</strong> {result.verseTextAr}</span><br />
//                     <span><strong>English:</strong> {result.verseTextEn}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default QuranSearch;



import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAllSurahsWithAyat, getAyahAudioUrl } from "../../Helper/Utils";
import AudioPlayer from "../AudioPlayer";
import AyahRecitation from "../AyahRecitation";
import  normalizeArabic  from "../../Helper/arabic-normalizer";
import FontResizer from "../FontResizer";
import { getAyahAudioUrlSource3 ,getAyahAudioUrlSource1} from "../../Helper/Utils";
const surahs = getAllSurahsWithAyat();

const QuranSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null); // Track selected result index
  const [loading, setLoading] = useState(false); // Track loading state

  const handleSearch = () => {
    setLoading(true); // Set loading to true when search begins
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filteredResults = [];

    surahs.forEach((surah) => {
      surah.verses.forEach((verse) => {
        const englishMatch = verse.text.en.toLowerCase().includes(lowerCaseSearchTerm);
        const arabicMatch = verse.text.ar.toLowerCase().includes(lowerCaseSearchTerm);

        if (englishMatch || arabicMatch) {
          filteredResults.push({
            surahNumber: surah.number, // Store surah number for the link
            surahNameAr: surah.name.ar,
            surahNameEn: surah.name.en,
            verseNumber: verse.number,
            verseTextAr: verse.text.ar,
            verseTextEn: verse.text.en,
          });
        }
      });
    });

    setResults(filteredResults);
    setLoading(false); // Set loading to false once search is complete
    setSelectedIndex(null); // Reset selected index after search
  };

  // Handle search when Enter key is pressed
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleResultClick = (index) => {
    setSelectedIndex(index); // Update the selected index
  };

  // Navigate to the specific verse page on double-click
  const handleDoubleClick = (surahNumber, verseNumber) => {
    const url = `/en/surahs/${surahNumber}/${verseNumber}`;
    window.location.href = url; // Navigate to the URL
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Quran Verse Search</h1>
       {/* Font Size Controls */}
       <FontResizer/>
      <div className="row mb-3">
        <div className="col-md-8 mx-auto">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for a word..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyPress} // Add event listener for Enter key press
            />
            <button className="btn btn-primary" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Show loading state while searching */}
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {/* Show result count */}
          <div className="text-center mt-3">
            {results.length > 0 ? (
              <p><strong>{results.length}</strong> result{results.length > 1 ? 's' : ''} found</p>
            ) : (
              <p>No results found.</p>
            )}
          </div>

          {/* Display search results */}
          {results.length > 0 && (
            <div>
              <h2>Search Results:</h2>
              <ul className="list-group">
                {results.map((result, index) => (
                  <li
                    key={index}
                    className={`list-group-item ${selectedIndex === index ? "bg-warning" : ""}`}
                    onClick={() => handleResultClick(index)} // Handle click to select result
                    onDoubleClick={() => handleDoubleClick(result.surahNumber, result.verseNumber)} // Handle double-click to navigate
                    style={{ cursor: "pointer" }} // Make the result clickable
                  >
                    <strong>{result.surahNameEn} ({result.surahNameAr})</strong> (Verse {result.verseNumber}): <br />
                    <span><strong>Arabic:</strong> {result.verseTextAr}</span><br />
                    <span><strong>English:</strong> {result.verseTextEn}</span>
                    <AudioPlayer url={getAyahAudioUrl(result.surahNumber, result.verseNumber)}/>
<AyahRecitation ayahText={result.verseTextAr} audioUrl={getAyahAudioUrlSource1(result.surahNumber, result.verseNumber)}/>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default QuranSearch;
