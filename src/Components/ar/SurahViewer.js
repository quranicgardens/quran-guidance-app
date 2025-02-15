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


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  normalizeArabic  from '../../Helper/arabic-normalizer';
const surahs = [
  { number: 1, name: 'ٱلْفَاتِحَة', type: 'Meccan', totalVerses: 7, ayat: ['بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ', 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', 'الرَّحْمَـٰنِ الرَّحِيمِ', 'مَالِكِ يَوْمِ الدِّينِ', 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ'] },
  { number: 2, name: 'ٱلْبَقَرَة', type: 'Medinan', totalVerses: 286, ayat: ['الم', 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ هُدًى لِّلْمُتَّقِينَ', 'الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ', /* add more ayat here */] },
  { number: 3, name: 'آلِ عِمْرَان', type: 'Medinan', totalVerses: 200, ayat: ['الم', 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ', /* add more ayat here */] },
  // Add more surahs here
];

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

  useEffect(() => {
    const surah = surahs.find(s => s.number.toString() === surahNumber);
    setSelectedSurah(surah || null);
    setFilteredAyat(surah ? surah.ayat : []);
  }, [surahNumber]);

  useEffect(() => {
    if (selectedSurah) {
      const filtered = selectedSurah.ayat.filter(ayah =>
        normalizeText(ayah).includes(normalizeText(searchTerm))
      );
      setFilteredAyat(filtered);
    }
  }, [searchTerm, selectedSurah]);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">عرض آيات السورة</h1>
      {selectedSurah ? (
        <div>
          <div className="list-group">
            <div className="list-group-item">
              <h5 className="mb-1">سورة {selectedSurah.number}: {selectedSurah.name}</h5>
              <p className="mb-1">نوع السورة: {selectedSurah.type === 'Meccan' ? 'مكية' : 'مدنية'}</p>
              <p className="mb-1">عدد الآيات: {selectedSurah.totalVerses}</p>
            </div>
          </div>
          <input
            type="text"
            className="form-control my-4"
            placeholder="ابحث في الآيات..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="list-group">
            {filteredAyat.map((ayah, index) => (
              <div key={index} className="list-group-item">
                {ayah}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>السورة غير موجودة.</p>
      )}
    </div>
  );
};

export default SurahViewer;