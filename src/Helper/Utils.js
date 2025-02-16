import SurahsDetails from '../Data/SurahsDetails';
import surahs from '../Data/UniversalQuranDB';
export const getTypeInArabic = (type) => {
    return type.toLowerCase() == 'meccan' ? 'مكية' : 'مدنية';
  };
  export const removeTashkeel = (text) => {
    text = text.replace(/ْ/g, ""); // ْ
    text = text.replace(/َ/g, ""); // َ
    text = text.replace(/ِ/g, ""); // ِ
    text = text.replace(/ّ/g, ""); // ّ
    text = text.replace(/ُ/g, ""); // ُ
    text = text.replace(/ً/g, ""); // ً
    text = text.replace(/ٍ/g, ""); // ٍ
    text = text.replace(/ّ/g, ""); // ~
    text = text.replace(/ٌ/g, ""); // ٌ
    return text.replace(/[\u0617-\u061A\u064B-\u0652]/g, '');
  };
   // export { getTypeInArabic, removeTashkeel };

   export const getSurahDetails = (surahNumber) => {
    return SurahsDetails[surahNumber - 1];
  }
  export const getAllSurahWithAyat = (surahNumber) => {
    return surahs[surahNumber - 1];
  }