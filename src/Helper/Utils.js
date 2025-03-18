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
function convertTo3DigitString(num) {
  // Convert the number to a string
  const numStr = num.toString();

  // Pad the number only if it has less than 3 digits
  return numStr.length < 3 ? numStr.padStart(3, '0') : numStr;
}




export const getSurahAudioUrl = (surahNumber) => {

  const formattedNumber = convertTo3DigitString(surahNumber);
  //console.log(formattedNumber); // Output: "015"
  return `https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/${formattedNumber}.mp3`;

}
export const getAyahAudioUrlSource1 = (surahNumber, ayahNumber) => {
  //العفاسى
  const formattedNumber = `${surahNumber}_${ayahNumber}`;
  // convertTo3DigitString(surahNumber);
  //console.log(formattedNumber); // Output: "015"
  return `https://quranaudio.pages.dev/1/${formattedNumber}.mp3`;


}
export const getAyahAudioUrlSource2 = (surahNumber, ayahNumber) => {
  // الحصرى مجود
  const formattedNumber = convertTo3DigitString(surahNumber) + convertTo3DigitString(ayahNumber);
  // convertTo3DigitString(surahNumber);
  //console.log(formattedNumber); // Output: "015"
  return `https://everyayah.com/data/Husary_128kbps_Mujawwad/${formattedNumber}.mp3`;


}
export const getAyahAudioUrlSource3 = (surahNumber, ayahNumber) => {
  // الحصرى م
  const formattedNumber = convertTo3DigitString(surahNumber) + convertTo3DigitString(ayahNumber);
  // convertTo3DigitString(surahNumber);
  //console.log(formattedNumber); // Output: "015"
  return `https://everyayah.com/data/Husary_64kbps/${formattedNumber}.mp3`;


}
export const getAyahAudioUrl = (surahNumber, ayahNumber) => {
  return getAyahAudioUrlSource2(surahNumber, ayahNumber);

}
export const getSurahDetails = (surahNumber) => {
  return SurahsDetails[surahNumber - 1];
}
export const getSurahWithAyat = (surahNumber) => {
  return surahs[surahNumber - 1];
}
export const getAllSurahsWithAyat = () => {
  return surahs;
}
export const getMatnObject = () => {
  let matn = {}
  let currentPath = window.location.pathname+window.location.hash;

  if (currentPath.includes(window.Constants.shatibyahRoute)) {
    matn = shatibyah
    matn.route = window.Constants.shatibyahRoute
  } else if (currentPath.includes(window.Constants.dorrahRoute)) {
    matn = dorrah
    matn.route = window.Constants.dorrahRoute
  } else if (currentPath.includes(window.Constants.tybahRoute)) {
    matn = tybah
    matn.route = window.Constants.tybahRoute
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

export const handleLanguageChange = (lang) => {
  setSiteLang(lang)
  window.location.reload()
}

export const getSiteLang = () => {

  let cuurentLang = localStorage.getItem("currentLang")
  if (!cuurentLang) {
    cuurentLang = "en"
  }
  return cuurentLang
}
export const setSiteLang = (lang) => {
  localStorage.setItem("currentLang", lang)
}

export const isRTL = () => {
  let lang = getSiteLang()
  if (lang == "ar") {
    return true
  }
  return false
}

export const getLangResource = (key) => {
  let localizedValue = ""
  try {

    let cuurentLang = getSiteLang()
    if (!cuurentLang) {
      cuurentLang = "en"
    }
    let resourcesString = localStorage.getItem("resources")
    let resourceObject = JSON.parse(resourcesString)

    localizedValue = resourceObject[cuurentLang][key.trim()];
    return localizedValue
  }
  catch (e) {
    console.log(e)
  }
  finally {
    return localizedValue
  }
}