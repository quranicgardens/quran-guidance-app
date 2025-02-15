
import React, {useState } from 'react';
import surahs from '../../Data/ar/surahs';
import SurahsDetails from '../../Data/SurahsDetails';
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

const SurahList = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredSurahs = surahs.filter((surah) =>
        removeTashkeel(surah.name).includes(searchTerm) ||
    surah.number.toString().includes(searchTerm)
    );
  return (
    <>
<style>{`
body {
  direction: rtl;
  text-align: right;
}
`}</style>
    <div className="container mt-5">
      <h1 className="mb-4">سور القرءان العظيم</h1>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="ابحث عن سورة..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="list-group">
        {filteredSurahs.map((surah) => (
            <Link to={`/surahs/${surah.number}`} key={surah.number} className="list-group-item list-group-item-action">

            <h5 className="mb-1">{surah.number}: {surah.name}</h5>
            <p className="mb-1">نوع السورة: {getTypeInArabic(SurahsDetails[surah.number-1].type)}</p>
            <p className="mb-1">عدد الآيات: {SurahsDetails[surah.number-1].total_verses}</p>
        
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};

export default SurahList;