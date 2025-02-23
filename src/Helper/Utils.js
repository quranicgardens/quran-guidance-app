import SurahsDetails from '../Data/SurahsDetails';
import surahs from '../Data/UniversalQuranDB';
import * as shatibyah from '../Data/Motoon/Shatibya/Shatibya';
import * as dorrah from '../Data/Motoon/Dorrah/Dorrah';
import * as tybah from '../Data/Motoon/Tybah/Tybah';
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
export const getSurahWithAyat = (surahNumber) => {
  return surahs[surahNumber - 1];
}
export const getAllSurahsWithAyat = () => {
  return surahs;
}
export const getMatnObject = () => 
  {
let matn={}
let currentPath = window.location.pathname;

if (currentPath.includes(window.Constants.shatibyahRoute)) {
matn=shatibyah
matn.route=window.Constants.shatibyahRoute
} else if (currentPath.includes(window.Constants.dorrahRoute)) {
 matn=dorrah
 matn.route=window.Constants.dorrahRoute
} else if (currentPath.includes(window.Constants.tybahRoute)) {
 matn=tybah
  matn.route=window.Constants.tybahRoute
}
return matn;
  }

// export const getMatnBaytas = () => {
//   let currentPath = window.location.pathname;
//   let bayts= []
//   if (currentPath.includes(window.Constants.shatibyahRoute)) {
//   bayts=shatibyah.bayts
//   } else if (currentPath.includes(window.Constants.dorrahRoute)) {
   
//   } else if (currentPath.includes(window.Constants.tybahRoute)) {
   
//   }
//   return bayts;
// }

// export const getMatnChapters = () => {
//   let currentPath = window.location.pathname;
//   let chapters= []
//   if (currentPath.includes(window.Constants.shatibyahRoute)) {
//   chapters=shatibyah.chapters
//   } else if (currentPath.includes(window.Constants.dorrahRoute)) {
   
//   } else if (currentPath.includes(window.Constants.tybahRoute)) {
   
//   }
//   return chapters;
// }

// export const getMatnSourcePath = () => {
//   let currentPath = window.location.pathname;
//   let path = ""
//   if (currentPath.includes(window.Constants.shatibyahRoute)) {
//     path = `../Data/Motoon/Shatibya/Shatibya`
//   } else if (currentPath.includes(window.Constants.dorrahRoute)) {
//     path = `../../../Data/Motoon/Dorrah/Dorrah`
//   } else if (currentPath.includes(window.Constants.tybahRoute)) {
//     path = `../../../Data/Motoon/Tybah/Tybah`
//   }
//   return path;
// }