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
// import { getAllSurahWithAyat, getSurahDetails, getSurahWithAyat, getTypeInArabic } from '../../Helper/Utils';
// import FontResizer from '../FontResizer';
// import AudioPlayer from '../AudioPlayer';
// import { getSurahAudioUrl } from '../../Helper/Utils';
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
//     const surah = getSurahWithAyat(surahNumber);
//     //surahs[surahNumber];
//     //.find(s => s.number.toString() === surahNumber);
//     if (surah.name) document.title = surah.name.ar ;
//     setSelectedSurah(surah || null);
//     setFilteredAyat(surah ? surah.verses : []);
//   }, [surahNumber]);

//   useEffect(() => {
//     if (selectedSurah) {
//       const filtered = selectedSurah.verses.filter(ayah =>
//         normalizeText(ayah.text.ar).includes(normalizeText(searchTerm))
//         || ayah.number.toString()==(searchTerm)
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
          
//           {/* Font Size Controls */}
//           <FontResizer/>

//           <div className="list-group">
//             <div className="list-group-item">
//               <h5 className="mb-1">سورة {surahNumber}: {getSurahDetails(surahNumber).name}</h5>
//               <p className="mb-1">نوع السورة: { getTypeInArabic(getSurahDetails(surahNumber).type)}</p>
//               <p className="mb-1">عدد الآيات: {getSurahDetails(surahNumber).total_verses}</p>
//               <AudioPlayer url={getSurahAudioUrl(surahNumber)}/>
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
//             <span className="ayah-text">{ayah.text.ar}</span>
//             <span className="ayah-number">({ayah.number})</span>
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


// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import normalizeArabic from '../../Helper/arabic-normalizer';
// // import surahs from '../../Data/ar/surah-ayahs';
// import { getAllSurahWithAyat, getSurahDetails, getSurahWithAyat, getTypeInArabic } from '../../Helper/Utils';
// import FontResizer from '../FontResizer';
// import AudioPlayer from '../AudioPlayer';
// import { getSurahAudioUrl } from '../../Helper/Utils';

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
//   const [tafseer, setTafseer] = useState(null); // State for Tafseer data
//   const [loadingTafseer, setLoadingTafseer] = useState(false); // State for loading indicator

//   // Fetch Tafseer from API
//   const fetchTafseer = async (surah, ayah) => {
//     setLoadingTafseer(true);
//     try {
//       const response = await fetch(`http://api.quran-tafseer.com/tafseer/2/${surah}/${ayah}`);
//       const data = await response.json();
//       setTafseer(data); // Set the received Tafseer data
//     } catch (error) {
//       console.error("Error fetching Tafseer:", error);
//     } finally {
//       setLoadingTafseer(false);
//     }
//   };

//   const handleAyahClick = (index) => {
//     setSelectedAyahIndex(index); // Set the clicked Ayah as selected
//     const selectedAyah = filteredAyat[index];
//     fetchTafseer(surahNumber, selectedAyah.number); // Fetch Tafseer for the clicked Ayah
//   };

//   useEffect(() => {
//     const surah = getSurahWithAyat(surahNumber);
//     if (surah.name) document.title = surah.name.ar;
//     setSelectedSurah(surah || null);
//     setFilteredAyat(surah ? surah.verses : []);
//   }, [surahNumber]);

//   useEffect(() => {
//     if (selectedSurah) {
//       const filtered = selectedSurah.verses.filter(ayah =>
//         normalizeText(ayah.text.ar).includes(normalizeText(searchTerm))
//         || ayah.number.toString() === searchTerm
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
//           font-family: 'Uthmani', Arial, sans-serif; /* You can use Uthmani font for Mushaf style */
//           direction: rtl;
//         }
//         .ayah-number {
//           padding-left: 5px;
//           padding-right: 5px;
//         }
//         .highlighted {
//           background-color: #ffeb3b; /* Yellow background for highlight */
//           border-radius: 5px;
//           transition: background-color 0.3s ease-in-out; /* Smooth transition for the highlight */
//         }
//         body {
//           direction: rtl;
//           text-align: right;
//         }
//       `}</style>

//       <div className="container mt-5">
//         <h1 className="mb-4">عرض آيات السورة</h1>
//         {selectedSurah ? (
//           <div>
//             {/* Font Size Controls */}
//             <FontResizer />

//             <div className="list-group">
//               <div className="list-group-item">
//                 <h5 className="mb-1">سورة {surahNumber}: {getSurahDetails(surahNumber).name}</h5>
//                 <p className="mb-1">نوع السورة: {getTypeInArabic(getSurahDetails(surahNumber).type)}</p>
//                 <p className="mb-1">عدد الآيات: {getSurahDetails(surahNumber).total_verses}</p>
//                 <AudioPlayer url={getSurahAudioUrl(surahNumber)} />
//               </div>
//             </div>

//             <input
//               type="text"
//               className="form-control my-4"
//               placeholder="ابحث في الآيات..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />

//             <div className="ayat-container">
//               {filteredAyat.map((ayah, index) => (
//                 <div
//                   key={index}
//                   onClick={() => handleAyahClick(index)}
//                   className={`ayah-wrapper ${selectedAyahIndex === index ? 'highlighted' : ''}`}
//                 >
//                   {/* Ayah Text and Number Inline */}
//                   <span className="ayah-text">{ayah.text.ar}</span>
//                   <span className="ayah-number">({ayah.number})</span>
//                 </div>
//               ))}
//             </div>

//             {selectedAyahIndex !== null && tafseer && (
//               <div className="tafseer-container mt-4">
//                 <h5>تفسير الآية:</h5>
//                 {loadingTafseer ? (
//                   <p>جاري تحميل التفسير...</p>
//                 ) : (
//                   <>
//                   <p>{tafseer ? tafseer.text : "لا يوجد تفسير متاح لهذه الآية."}</p>
//                   <div>{tafseer ? tafseer.tafseer_name : ""} </div>
//                   </>
//                 )}
//               </div>
//             )}
//           </div>
//         ) : (
//           <p>السورة غير موجودة.</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default SurahViewer;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import normalizeArabic from '../../Helper/arabic-normalizer';
// import surahs from '../../Data/ar/surah-ayahs';
import { getAllSurahWithAyat, getSurahDetails, getSurahWithAyat, getTypeInArabic } from '../../Helper/Utils';
import FontResizer from '../FontResizer';
import AudioPlayer from '../AudioPlayer';
import { getSurahAudioUrl } from '../../Helper/Utils';

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

const SurahViewer = () => {
  const { surahNumber } = useParams();
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAyat, setFilteredAyat] = useState([]);
  const [selectedAyahIndex, setSelectedAyahIndex] = useState(null); // Track selected Ayah
  const [tafseer, setTafseer] = useState(null); // State for Tafseer data
  const [loadingTafseer, setLoadingTafseer] = useState(false); // State for loading indicator

  const navigate = useNavigate(); // Hook to programmatically navigate
  const currentSurahNumber = parseInt(surahNumber, 10); // Parse the current Surah number as an integer

  // Fetch Tafseer from API
  const fetchTafseer = async (surah, ayah) => {
    setLoadingTafseer(true);
    try {
      const response = await fetch(`http://api.quran-tafseer.com/tafseer/2/${surah}/${ayah}`);
      const data = await response.json();
      setTafseer(data); // Set the received Tafseer data
    } catch (error) {
      console.error("Error fetching Tafseer:", error);
    } finally {
      setLoadingTafseer(false);
    }
  };

  const handleAyahClick = (index) => {
    setSelectedAyahIndex(index); // Set the clicked Ayah as selected
    const selectedAyah = filteredAyat[index];
    fetchTafseer(surahNumber, selectedAyah.number); // Fetch Tafseer for the clicked Ayah
  };

  // Go to the next surah
  const goToNextSurah = () => {
    const nextSurah = currentSurahNumber === 114 ? 1 : currentSurahNumber + 1;
    navigate(`/surahs/${nextSurah}`);
  };

  // Go to the previous surah
  const goToPreviousSurah = () => {
    const prevSurah = currentSurahNumber === 1 ? 114 : currentSurahNumber - 1;
    navigate(`/surahs/${prevSurah}`);
  };

  useEffect(() => {
    const surah = getSurahWithAyat(surahNumber);
    if (surah.name) document.title = surah.name.ar;
    setSelectedSurah(surah || null);
    setFilteredAyat(surah ? surah.verses : []);
  }, [surahNumber]);

  useEffect(() => {
    if (selectedSurah) {
      const filtered = selectedSurah.verses.filter(ayah =>
        normalizeText(ayah.text.ar).includes(normalizeText(searchTerm))
        || ayah.number.toString() === searchTerm
      );
      setFilteredAyat(filtered);
    }
  }, [searchTerm, selectedSurah]);

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
          font-family: 'Uthmani', Arial, sans-serif; /* You can use Uthmani font for Mushaf style */
          direction: rtl;
        }
        .ayah-number {
          padding-left: 5px;
          padding-right: 5px;
        }
        .highlighted {
          background-color: #ffeb3b; /* Yellow background for highlight */
          border-radius: 5px;
          transition: background-color 0.3s ease-in-out; /* Smooth transition for the highlight */
        }
        body {
          direction: rtl;
          text-align: right;
        }
      `}</style>

      <div className="container mt-5">
        <h1 className="mb-4">عرض آيات السورة</h1>
        {selectedSurah ? (
          <div>
            {/* Font Size Controls */}
            <FontResizer />

            <div className="list-group">
              <div className="list-group-item">
                <h5 className="mb-1">سورة {surahNumber}: {getSurahDetails(surahNumber).name}</h5>
                <p className="mb-1">نوع السورة: {getTypeInArabic(getSurahDetails(surahNumber).type)}</p>
                <p className="mb-1">عدد الآيات: {getSurahDetails(surahNumber).total_verses}</p>
                <AudioPlayer url={getSurahAudioUrl(surahNumber)} />
              </div>
            </div>

            <input
              type="text"
              className="form-control my-4"
              placeholder="ابحث في الآيات..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="ayat-container">
              {filteredAyat.map((ayah, index) => (
                <div
                  key={index}
                  onClick={() => handleAyahClick(index)}
                  className={`ayah-wrapper ${selectedAyahIndex === index ? 'highlighted' : ''}`}
                >
                  {/* Ayah Text and Number Inline */}
                  <span className="ayah-text">{ayah.text.ar}</span>
                  <span className="ayah-number">({ayah.number})</span>
                </div>
              ))}
            </div>

            {selectedAyahIndex !== null && tafseer && (
              <div className="tafseer-container mt-4">
                <h5>تفسير الآية:</h5>
                {loadingTafseer ? (
                  <p>جاري تحميل التفسير...</p>
                ) : (
                  <>
                  <p>{tafseer ? tafseer.text : "لا يوجد تفسير متاح لهذه الآية."}</p>
                  <div>{tafseer ? tafseer.tafseer_name : ""} </div>
                  </>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-4">
              <button onClick={goToPreviousSurah} className="btn btn-primary me-3">السورة السابقة</button>
              <button onClick={goToNextSurah} className="btn btn-primary">السورة التالية</button>
            </div>
          </div>
        ) : (
          <p>السورة غير موجودة.</p>
        )}
      </div>
    </>
  );
};

export default SurahViewer;
