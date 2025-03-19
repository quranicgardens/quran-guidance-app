

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  normalizeArabic  from '../../Helper/arabic-normalizer';
//import surahs from '../../Data/ar/surah-ayahs';
import { getAllSurahWithAyat, getSurahDetails, getSurahWithAyat, getTypeInArabic } from '../../Helper/Utils';

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


const EntireQuranSearch = () => {
  const { surahNumber } = useParams();
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAyat, setFilteredAyat] = useState([]);
  const [selectedAyahIndex, setSelectedAyahIndex] = useState(null); // Track selected Ayah
  const handleAyahClick = (index) => {
    setSelectedAyahIndex(index); // Set the clicked Ayah as selected
  };
  useEffect(() => {
    const surah =getSurahWithAyat(surahNumber);
    //surahs[surahNumber];
    //.find(s => s.number.toString() === surahNumber);
    if (surah?.name)
       {document.title = surah.name.ar ;}
    setSelectedSurah(surah || null);
    setFilteredAyat(surah ? surah.verses : []);
  }, [surahNumber]);

  useEffect(() => {
    if (selectedSurah) {
      const filtered = selectedSurah.verses.filter(ayah =>
        normalizeText(ayah.text.ar).includes(normalizeText(searchTerm))
        || ayah.number.toString()==(searchTerm)
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
.ayah-wrapper{
display: inline;
}
.ayah-text {
  font-size: 1.2rem;
  font-family: 'Uthmani', Arial, sans-serif; /* You can use Uthmani font for Mushaf style */
  direction: rtl;
}
.ayah-number{
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
          <div className="my-4 my-4 d-flex gap-3">
            <button id="increase-font" className="btn btn-primary me-2">تكبير الخط</button>
            <button id="decrease-font" className="btn btn-secondary">تصغير الخط</button>
          </div>

          <div className="list-group">
            <div className="list-group-item">
              <h5 className="mb-1">سورة {surahNumber}: {getSurahDetails(surahNumber).name}</h5>
              <p className="mb-1">نوع السورة: { getTypeInArabic(getSurahDetails(surahNumber).type)}</p>
              <p className="mb-1">عدد الآيات: {getSurahDetails(surahNumber).total_verses}</p>
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
              <div key={index}  onClick={() => handleAyahClick(index)}  className={`ayah-wrapper ${
                selectedAyahIndex === index ? 'highlighted' : ''
              }`}>
               {/* Ayah Text and Number Inline */}
            <span className="ayah-text">{ayah.text.ar}</span>
            <span className="ayah-number">({ayah.number})</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>السورة غير موجودة.</p>
      )}
    </div>
    </>
  );
};

export default EntireQuranSearch;