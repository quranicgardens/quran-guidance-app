// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import surahs from '../../Data/ar/surah-ayahs';
// import SurahsDetails from '../../Data/SurahsDetails';
// import { getTypeInArabic, removeTashkeel } from '../../Helper/Utils';
// // const surahs = [
// //   { number: 1, name: 'ٱلْفَاتِحَة', type: 'Meccan', totalVerses: 7, ayat: ['بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ', 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', 'الرَّحْمَـٰنِ الرَّحِيمِ', 'مَالِكِ يَوْمِ الدِّينِ', 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ'] },
// //   { number: 2, name: 'ٱلْبَقَرَة', type: 'Medinan', totalVerses: 286, ayat: ['الم', 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ هُدًى لِّلْمُتَّقِينَ', 'الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ', /* add more ayat here */] },
// //   { number: 3, name: 'آلِ عِمْرَان', type: 'Medinan', totalVerses: 200, ayat: ['الم', 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ', /* add more ayat here */] },
// //   // Add more surahs here
// // ];

// const SurahViewer = () => {
//   const { surahNumber } = useParams();
//   const [selectedSurah, setSelectedSurah] = useState(null);

//   useEffect(() => {
//     const surah = surahs[surahNumber];
//     //.find(s => s.number.toString() === surahNumber);
//     setSelectedSurah(surah || null);
//   }, [surahNumber]);

//   return (
//     <>
//     <style>{`
// body {
//   direction: rtl;
//   text-align: right;
// }
// `}</style>
//     <div className="container mt-5">
//       <h1 className="mb-4">عرض آيات السورة</h1>
//       {selectedSurah ? (
//         <div className="list-group">
//           <div className="list-group-item">

//             <h5 className="mb-1">سورة {selectedSurah.number}: {selectedSurah.name}</h5>
//             {/* <p className="mb-1">نوع السورة: {getTypeInArabic(SurahsDetails[selectedSurah.number-1].type)}</p>
//             <p className="mb-1">عدد الآيات: {SurahsDetails[selectedSurah.number-1].total_verses}</p> */}
//             <p className="mb-1">الآيات:</p>
//             <div className="mt-3">
//               {selectedSurah.ayahs.map((ayah, index) => (
//                 <p key={index}>{ayah.text}</p>
//               ))}
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p>السورة غير موجودة.</p>
//       )}
//     </div>
//     </>
//   );
// };

// export default SurahViewer;



// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const surahs = [
//   { number: 1, name: 'ٱلْفَاتِحَة', type: 'Meccan', totalVerses: 7, ayat: ['بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ', 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', 'الرَّحْمَـٰنِ الرَّحِيمِ', 'مَالِكِ يَوْمِ الدِّينِ', 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ'] },
//   { number: 2, name: 'ٱلْبَقَرَة', type: 'Medinan', totalVerses: 286, ayat: ['الم', 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ هُدًى لِّلْمُتَّقِينَ', 'الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ', /* add more ayat here */] },
//   { number: 3, name: 'آلِ عِمْرَان', type: 'Medinan', totalVerses: 200, ayat: ['الم', 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ', /* add more ayat here */] },
//   // Add more surahs here
// ];

// const removeTashkeel = (text) => {
//   return text.replace(/[\u0617-\u061A\u064B-\u0652]/g, '');
// };

// const SurahViewer = () => {
//   const { surahNumber } = useParams();
//   const [selectedSurah, setSelectedSurah] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredAyat, setFilteredAyat] = useState([]);

//   useEffect(() => {
//     const surah = surahs.find(s => s.number.toString() === surahNumber);
//     setSelectedSurah(surah || null);
//     setFilteredAyat(surah ? surah.ayat : []);
//   }, [surahNumber]);

//   useEffect(() => {
//     if (selectedSurah) {
//       const filtered = selectedSurah.ayat.filter(ayah =>
//         removeTashkeel(ayah).includes(removeTashkeel(searchTerm))
//       );
//       setFilteredAyat(filtered);
//     }
//   }, [searchTerm, selectedSurah]);

//   return (
//     <div className="container mt-5">
//       <h1 className="mb-4">عرض آيات السورة</h1>
//       {selectedSurah ? (
//         <div>
//           <div className="list-group">
//             <div className="list-group-item">
//               <h5 className="mb-1">سورة {selectedSurah.number}: {selectedSurah.name}</h5>
//               <p className="mb-1">نوع السورة: {selectedSurah.type === 'Meccan' ? 'مكية' : 'مدنية'}</p>
//               <p className="mb-1">عدد الآيات: {selectedSurah.totalVerses}</p>
//             </div>
//           </div>
//           <input
//             type="text"
//             className="form-control my-4"
//             placeholder="ابحث في الآيات..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <div className="list-group">
//             {filteredAyat.map((ayah, index) => (
//               <div key={index} className="list-group-item">
//                 {ayah}
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <p>السورة غير موجودة.</p>
//       )}
//     </div>
//   );
// };

// export default SurahViewer;


// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import  normalizeArabic  from '../../Helper/arabic-normalizer';
// import surahs from '../../Data/ar/surah-ayahs';
// import { getSurahDetails, getTypeInArabic } from '../../Helper/Utils';

// const normalizeText = (text) => {
//   return normalizeArabic(text)
//     .normalize("NFD") // Normalize to NFD (Canonical Decomposition)
//     .replace(/[\u0617-\u061A\u064B-\u0652]/g, '') // Remove Tashkeel (diacritics)
//     .replace(/[\u0640-\u064A]/g, (char) => {
//       // Replace Arabic letters to unify different forms of the same letter
//       const map = {
//         '\u0640': '', '\u0641': 'ف', '\u0642': 'ق', '\u0643': 'ك', '\u0644': 'ل', '\u0645': 'م', '\u0646': 'ن', '\u0647': 'ه', '\u0648': 'و', '\u0649': 'ى', '\u064A': 'ي'
//       };
//       return map[char] || char;
//     });
// };


// const SurahViewer = () => {
//   const { surahNumber } = useParams();
//   const [selectedSurah, setSelectedSurah] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredAyat, setFilteredAyat] = useState([]);
//   const [selectedAyahIndex, setSelectedAyahIndex] = useState(null); // Track selected Ayah
//   const handleAyahClick = (index) => {
//     setSelectedAyahIndex(index); // Set the clicked Ayah as selected
//   };
//   useEffect(() => {
//     const surah = surahs[surahNumber];
//     //.find(s => s.number.toString() === surahNumber);
//     if (surah.name) document.title = surah.name;
//     setSelectedSurah(surah || null);
//     setFilteredAyat(surah ? surah.ayahs : []);
//   }, [surahNumber]);

//   useEffect(() => {
//     if (selectedSurah) {
//       const filtered = selectedSurah.ayahs.filter(ayah =>
//         normalizeText(ayah).includes(normalizeText(searchTerm))
//       );
//       setFilteredAyat(filtered);
//     }
//   }, [searchTerm, selectedSurah]);

//   return (
//         <>
//     <style>{`
//     .ayah-number {
//     font-weight: 600;
// }
// .ayah-wrapper{
// display: inline;
// }
// .ayah-text {
//   font-size: 1.2rem;
//   font-family: 'Uthmani', Arial, sans-serif; /* You can use Uthmani font for Mushaf style */
//   direction: rtl;
// }
// .ayah-number{
// padding-left: 5px;
// padding-right: 5px;
// }
// .highlighted {
//   background-color: #ffeb3b; /* Yellow background for highlight */
//   border-radius: 5px;
//   transition: background-color 0.3s ease-in-out; /* Smooth transition for the highlight */
// }
// body {
//   direction: rtl;
//   text-align: right;
// }
// `}</style>
//     <div className="container mt-5">
//       <h1 className="mb-4">عرض آيات السورة</h1>
//       {selectedSurah ? (
    
//         <div>
//           <div className="list-group">
//             <div className="list-group-item">
//               <h5 className="mb-1">سورة {surahNumber}: {getSurahDetails(surahNumber).name}</h5>
//               <p className="mb-1">نوع السورة: { getTypeInArabic(getSurahDetails(surahNumber).type)}</p>
//               <p className="mb-1">عدد الآيات: {getSurahDetails(surahNumber).total_verses}</p>
//             </div>
//           </div>
//           <input
//             type="text"
//             className="form-control my-4"
//             placeholder="ابحث في الآيات..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <div className="ayat-container">
//             {filteredAyat.map((ayah, index) => (
//               <div key={index}  onClick={() => handleAyahClick(index)}  className={`ayah-wrapper ${
//                 selectedAyahIndex === index ? 'highlighted' : ''
//               }`}>
//                {/* Ayah Text and Number Inline */}
//             <span className="ayah-text">{ayah.text}</span>
//             <span className="ayah-number">({index + 1})</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <p>السورة غير موجودة.</p>
//       )}
//     </div>
//     </>
//   );
// };

// export default SurahViewer;


//using global data


// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import  normalizeArabic  from '../../Helper/arabic-normalizer';
// //import surahs from '../../Data/ar/surah-ayahs';
// import { getSurahWithAyat, getSurahDetails, getTypeInArabic } from '../../Helper/Utils';

// const normalizeText = (text) => {
//   return normalizeArabic(text)
//     .normalize("NFD") // Normalize to NFD (Canonical Decomposition)
//     .replace(/[\u0617-\u061A\u064B-\u0652]/g, '') // Remove Tashkeel (diacritics)
//     .replace(/[\u0640-\u064A]/g, (char) => {
//       // Replace Arabic letters to unify different forms of the same letter
//       const map = {
//         '\u0640': '', '\u0641': 'ف', '\u0642': 'ق', '\u0643': 'ك', '\u0644': 'ل', '\u0645': 'م', '\u0646': 'ن', '\u0647': 'ه', '\u0648': 'و', '\u0649': 'ى', '\u064A': 'ي'
//       };
//       return map[char] || char;
//     });
// };


// const SurahViewerEn = () => {
//   const { surahNumber,ayahNumber } = useParams();
//   const [selectedSurah, setSelectedSurah] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredAyat, setFilteredAyat] = useState([]);
//   const [selectedAyahIndex, setSelectedAyahIndex] = useState(null); // Track selected Ayah
//   const handleAyahClick = (index) => {
//     setSelectedAyahIndex(index); // Set the clicked Ayah as selected
//   };
//   useEffect(() => {
//     const surah = getSurahWithAyat(surahNumber);
//     //surahs[surahNumber];
//     //.find(s => s.number.toString() === surahNumber);
//     if (surah.name) document.title = surah.name.ar+ " - " + surah.name.en;
//     setSelectedSurah(surah || null);
//     setFilteredAyat(surah ? surah.verses : []);
//   }, [surahNumber]);

//   useEffect(() => {
//     if (selectedSurah) {

//       const filtered = selectedSurah.verses.filter(ayah =>
        
//          ayah.text.en.toLowerCase().includes(searchTerm.toLowerCase())
//         || (ayah.number.toString()==(searchTerm.trim()))
//         ||normalizeText(ayah.text.ar).includes(normalizeText(searchTerm))
//       );
//       setFilteredAyat(filtered);
//     }
//   }, [searchTerm, selectedSurah]);

//   return (
//         <>
//     <style>{`
//     .ayah-number {
//     font-weight: 600;
// }
// .ayah-wrapper{
// display: inline;
// }
// .ayah-text {
//   font-size: 1.2rem;
//   font-family: 'Uthmani', Arial, sans-serif; /* You can use Uthmani font for Mushaf style */
//   direction: rtl;
// }
// .ayah-number{
// padding-left: 5px;
// padding-right: 5px;
// }
// .highlighted {
//   background-color: #ffeb3b; /* Yellow background for highlight */
//   border-radius: 5px;
//   transition: background-color 0.3s ease-in-out; /* Smooth transition for the highlight */
// }
// body {
//   direction: rtl;
//   text-align: right;
// }
// `}</style>
//     <div className="container mt-5">
//       <h1 className="mb-4">عرض آيات السورة
//         -
//         Surah Verses Viewer
//       </h1>
//       {selectedSurah ? (
    
//         <div>
          
//           {/* Font Size Controls */}
//           <div className="my-4 my-4 d-flex gap-3">
//             <button id="increase-font" className="btn btn-primary me-2"
//             >
//               Increase font size
//             </button>
//             <button id="decrease-font" className="btn btn-secondary"
//             >
//               Decrease font size
//             </button>
//           </div>

//           <div className="list-group">
//             <div className="list-group-item">
//               <h5 className="mb-1">سورة {surahNumber}: {getSurahDetails(surahNumber).name}</h5>
//               <p className="mb-1">نوع السورة: { getTypeInArabic(getSurahDetails(surahNumber).type)}</p>
//               <p className="mb-1">عدد الآيات: {getSurahDetails(surahNumber).total_verses}</p>
//             </div>
//           </div>
//           <input
//             type="text"
//             className="form-control my-4"
//             placeholder="ابحث في الآيات...
//             search in verses...
//             "
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <div className="ayat-container">
//             {filteredAyat.map((ayah, index) => (
//               <div key={index}  onClick={() => handleAyahClick(index)}  className={`ayah-wrapper ${
//                 selectedAyahIndex === index ? 'highlighted' : ''
//               }`}>
//                {/* Ayah Text and Number Inline */}
               
//                " 
//             <span className="ayah-text">{ayah.text.ar}</span>
          
//            "
//            &nbsp;
//            <br/>
//             <span className="ayah-text">{ayah.text.en}</span>
//           <br/>
//             <span className="ayah-number">({ayah.number})</span>
      
//             <hr/>
//             {/* <span className="ayah-number">({ayah.number})</span> */}
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <p>السورة غير موجودة.
//           surah not found
//         </p>
//       )}
//     </div>
//     </>
//   );
// };

// export default SurahViewerEn;


// import React, { useState, useEffect, useRef } from 'react';
// import { useParams } from 'react-router-dom';
// import normalizeArabic from '../../Helper/arabic-normalizer';
// import { getSurahWithAyat, getSurahDetails, getTypeInArabic } from '../../Helper/Utils';

// const normalizeText = (text) => {
//   return normalizeArabic(text)
//     .normalize("NFD") // Normalize to NFD (Canonical Decomposition)
//     .replace(/[\u0617-\u061A\u064B-\u0652]/g, '') // Remove Tashkeel (diacritics)
//     .replace(/[\u0640-\u064A]/g, (char) => {
//       // Replace Arabic letters to unify different forms of the same letter
//       const map = {
//         '\u0640': '', '\u0641': 'ف', '\u0642': 'ق', '\u0643': 'ك', '\u0644': 'ل', '\u0645': 'م', '\u0646': 'ن', '\u0647': 'ه', '\u0648': 'و', '\u0649': 'ى', '\u064A': 'ي'
//       };
//       return map[char] || char;
//     });
// };

// const SurahViewerEn = () => {
//   const { surahNumber, ayahNumber } = useParams();
//   const [selectedSurah, setSelectedSurah] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredAyat, setFilteredAyat] = useState([]);
//   const [selectedAyahIndex, setSelectedAyahIndex] = useState(null); // Track selected Ayah
//   const ayahRefs = useRef([]); // Refs to store references to each Ayah for scrolling

//   // Handle Ayah click
//   const handleAyahClick = (index) => {
//     setSelectedAyahIndex(index); // Set the clicked Ayah as selected
//     if (ayahRefs.current[index]) {
//       ayahRefs.current[index].scrollIntoView({
//         behavior: 'smooth',
//         block: 'center', // Scroll to the center of the Ayah
//       });
//     }
//   };

//   useEffect(() => {
//     const surah = getSurahWithAyat(surahNumber);
//     if (surah && surah.name) {
//       document.title = `${surah.name.ar} - ${surah.name.en}`;
//     }
//     setSelectedSurah(surah || null);
//     setFilteredAyat(surah ? surah.verses : []);
//   }, [surahNumber]);

//   useEffect(() => {
//     if (selectedSurah) {
//       const filtered = selectedSurah.verses.filter((ayah) =>
//         ayah.text.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         ayah.number.toString() === searchTerm.trim() ||
//         normalizeText(ayah.text.ar).includes(normalizeText(searchTerm))
//       );
//       setFilteredAyat(filtered);
//     }
//   }, [searchTerm, selectedSurah]);

//   return (
//     <>
//       <style>{`
//         .ayah-number {
//           font-weight: 600;
//         }
//         .ayah-wrapper {
//           display: inline;
//         }
//         .ayah-text {
//           font-size: 1.2rem;
//           font-family: 'Uthmani', Arial, sans-serif;
//           direction: rtl;
//         }
//         .ayah-number {
//           padding-left: 5px;
//           padding-right: 5px;
//         }
//         .highlighted {
//           background-color: #ffeb3b; /* Yellow background for highlight */
//           border-radius: 5px;
//           transition: background-color 0.3s ease-in-out;
//         }
//         body {
//           direction: rtl;
//           text-align: right;
//         }
//       `}</style>
//       <div className="container mt-5">
//         <h1 className="mb-4">عرض آيات السورة - Surah Verses Viewer</h1>
//         {selectedSurah ? (
//           <div>
//             <div className="my-4 d-flex gap-3">
//               <button id="increase-font" className="btn btn-primary me-2">
//                 Increase font size
//               </button>
//               <button id="decrease-font" className="btn btn-secondary">
//                 Decrease font size
//               </button>
//             </div>

//             <div className="list-group">
//               <div className="list-group-item">
//                 <h5 className="mb-1">سورة {surahNumber}: {getSurahDetails(surahNumber).name}</h5>
//                 <p className="mb-1">نوع السورة: {getTypeInArabic(getSurahDetails(surahNumber).type)}</p>
//                 <p className="mb-1">عدد الآيات: {getSurahDetails(surahNumber).total_verses}</p>
//               </div>
//             </div>
//             <input
//               type="text"
//               className="form-control my-4"
//               placeholder="ابحث في الآيات... search in verses..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <div className="ayat-container">
//               {filteredAyat.map((ayah, index) => (
//                 <div
//                   key={index}
//                   ref={(el) => ayahRefs.current[index] = el} // Set ref for each Ayah
//                   onClick={() => handleAyahClick(index)}
//                   className={`ayah-wrapper ${selectedAyahIndex === index ? 'highlighted' : ''}`}
//                 >
//                   <span className="ayah-text">{ayah.text.ar}</span>
//                   &nbsp;
//                   <br />
//                   <span className="ayah-text">{ayah.text.en}</span>
//                   <br />
//                   <span className="ayah-number">({ayah.number})</span>
//                   <hr />
//                 </div>
//               ))}
//             </div>
//           </div>
//         ) : (
//           <p>السورة غير موجودة. Surah not found</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default SurahViewerEn;

import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import normalizeArabic from '../../Helper/arabic-normalizer';
import { getSurahWithAyat, getSurahDetails, getTypeInArabic } from '../../Helper/Utils';

const normalizeText = (text) => {
  return normalizeArabic(text)
    .normalize("NFD") // Normalize to NFD (Canonical Decomposition)
    .replace(/[\u0617-\u061A\u064B-\u0652]/g, '') // Remove Tashkeel (diacritics)
    .replace(/[\u0640-\u064A]/g, (char) => {
      // Replace Arabic letters to unify different forms of the same letter
      const map = {
        '\u0640': '', '\u0641': 'ف', '\u0642': 'ق', '\u0643': 'ك', '\u0644': 'ل', '\u0645': 'م', '\u0646': 'ن', '\u0647': 'ه', '\u0648': 'و', '\u0649': 'ى', '\u064A': 'ي'
      };
      return map[char] || char;
    });
};

const SurahViewerEn = () => {
  const { surahNumber, ayahNumber } = useParams(); // Extract both surahNumber and ayahNumber from the URL
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAyat, setFilteredAyat] = useState([]);
  const [selectedAyahIndex, setSelectedAyahIndex] = useState(null); // Track selected Ayah
  const ayahRefs = useRef([]); // Refs to store references to each Ayah for scrolling

  // Handle Ayah click
  const handleAyahClick = (index) => {
    setSelectedAyahIndex(index); // Set the clicked Ayah as selected
    if (ayahRefs.current[index]) {
      ayahRefs.current[index].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  useEffect(() => {
    const surah = getSurahWithAyat(surahNumber);
    if (surah && surah.name) {
      document.title = `${surah.name.ar} - ${surah.name.en}`;
    }
    setSelectedSurah(surah || null);
    setFilteredAyat(surah ? surah.verses : []);
  }, [surahNumber]);

  // useEffect(() => {
  //   if (selectedSurah) {
  //     const filtered = selectedSurah.verses.filter((ayah) =>
        
  //       ayah.text.en.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
  //       ayah.number.toString() === searchTerm.trim() ||
  //       normalizeText(ayah.text.ar).includes(normalizeText(searchTerm))
  //     );
  //     setFilteredAyat(filtered);
  //   }
  // }, [searchTerm, selectedSurah]);
  useEffect(() => {
    if (selectedSurah) {
      const filtered = selectedSurah.verses.filter((ayah) => {
        const lowerCaseSearchTerm = searchTerm.trim().toLowerCase(); // Normalize the search term
        const lowerCaseEnglishText = ayah.text.en.toLowerCase(); // Convert the English text to lowercase
  
        // Check if searchTerm is a number
        const isNumberSearch = !isNaN(searchTerm.trim()) && searchTerm.trim() !== "";
  
        // Check if searchTerm contains English characters (non-Arabic characters)
        const isEnglishSearch = /[a-zA-Z]/.test(searchTerm);
  
        // Debugging output
        console.log(`Searching for: "${lowerCaseSearchTerm}"`);
        console.log(`Ayah English text: "${lowerCaseEnglishText}"`);
        console.log(`Is English Search: ${isEnglishSearch}`);
        console.log(`Is Number Search: ${isNumberSearch}`);
  
        // Matches based on the search term's nature (English, Number, or Arabic)
        const matchesEnglish = isEnglishSearch && lowerCaseEnglishText.includes(lowerCaseSearchTerm);
        const matchesNumber = isNumberSearch && ayah.number.toString() === searchTerm.trim();
        const matchesArabic = !isNumberSearch && !isEnglishSearch && normalizeText(ayah.text.ar).includes(normalizeText(lowerCaseSearchTerm));
  
        // Log the individual match results for debugging
        console.log(`Matches English: ${matchesEnglish}`);
        console.log(`Matches Number: ${matchesNumber}`);
        console.log(`Matches Arabic: ${matchesArabic}`);
  
        return matchesEnglish || matchesNumber || matchesArabic;
      });
  
      // Debugging output to show the filtered results
      console.log('Filtered Ayat:', filtered);
      setFilteredAyat(filtered); // Set filtered verses
    }
  }, [searchTerm, selectedSurah]);
  

  useEffect(() => {
    // Highlight the Ayah based on ayahNumber from URL
    if (ayahNumber && selectedSurah) {
      const index = selectedSurah.verses.findIndex(ayah => ayah.number.toString() === ayahNumber);
      if (index !== -1) {
        setSelectedAyahIndex(index); // Highlight the Ayah
        if (ayahRefs.current[index]) {
          ayahRefs.current[index].scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      }
    }
  }, [ayahNumber, selectedSurah]);

  return (
    <>
      <style>{`
        .ayah-number {
          font-weight: 600;
        }
        .ayah-wrapper {
          display: inline;
        }
        .ayah-text {
          font-size: 1.2rem;
          font-family: 'Uthmani', Arial, sans-serif;
          direction: rtl;
        }
        .ayah-number {
          padding-left: 5px;
          padding-right: 5px;
        }
        .highlighted {
          background-color: #ffeb3b; /* Yellow background for highlight */
          border-radius: 5px;
          transition: background-color 0.3s ease-in-out;
        }
        body {
          direction: rtl;
          text-align: right;
        }
      `}</style>
      <div className="container mt-5">
        <h1 className="mb-4">عرض آيات السورة - Surah Verses Viewer</h1>
        {selectedSurah ? (
          <div>
            <div className="my-4 d-flex gap-3">
              <button id="increase-font" className="btn btn-primary me-2">
                Increase font size
              </button>
              <button id="decrease-font" className="btn btn-secondary">
                Decrease font size
              </button>
            </div>

            <div className="list-group">
              <div className="list-group-item">
                <h5 className="mb-1">سورة {surahNumber}: {getSurahDetails(surahNumber).name}</h5>
                <p className="mb-1">نوع السورة: {getTypeInArabic(getSurahDetails(surahNumber).type)}</p>
                <p className="mb-1">عدد الآيات: {getSurahDetails(surahNumber).total_verses}</p>
              </div>
            </div>
            <input
              type="text"
              className="form-control my-4"
              placeholder="ابحث في الآيات... search in verses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="ayat-container">
              {filteredAyat.map((ayah, index) => (
                <div
                  key={index}
                  ref={(el) => ayahRefs.current[index] = el} // Set ref for each Ayah
                  onClick={() => handleAyahClick(index)}
                  className={`ayah-wrapper ${selectedAyahIndex === index ? 'highlighted' : ''}`}
                >
                  <span className="ayah-text">{ayah.text.ar}</span>
                  &nbsp;
                  <br />
                  <span className="ayah-text">{ayah.text.en}</span>
                  <br />
                  <span className="ayah-number">({ayah.number})</span>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>السورة غير موجودة. Surah not found</p>
        )}
      </div>
    </>
  );
};

export default SurahViewerEn;
