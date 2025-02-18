
import React, {useState } from 'react';
import surahs from '../../Data/en/surahs';
//import SurahsDetails from '../../Data/SurahsDetails';
import { getTypeInArabic, removeTashkeel } from '../../Helper/Utils';
import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import surahs from '../../Data/ar/surahs';
// const surahs = [
//   { number: 1, name: 'Al-Fatihah' },
//   { number: 2, name: 'Al-Baqarah' },
//   { number: 3, name: 'Al-Imran' },
//   // Add more surahs here
// ];

const SurahListEn = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredSurahs = surahs.filter((surah) =>
        removeTashkeel(surah.name).includes(searchTerm) ||
        surah.transliteration.toLowerCase().includes(searchTerm.toLowerCase()) ||
        surah.translation.toLowerCase().includes(searchTerm.toLowerCase()) ||
       surah.number.toString()==(searchTerm)
    );
  return (
    <>
<style>{`
body {
  
}
`}</style>
    <div className="container mt-5">
      <h1 className="mb-4">سور القرءان العظيم
        -
        Surahs (Chapters) of the Noble Quran
      </h1>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="
        search for a surah...search by number, name, transliteration or translation
        "
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="list-group">
        {filteredSurahs.map((surah) => (
            <Link to={`/en/surahs/${surah.number}`} key={surah.number} className="list-group-item list-group-item-action">

            <h5 className="mb-1">{surah.number}: {surah.name} - {surah.transliteration} - {surah.translation}</h5>
            <p className="mb-1">Surah type : {surah.type}</p>
            <p className="mb-1">Number of verses : {surah.total_verses}</p>
        
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};

export default SurahListEn;