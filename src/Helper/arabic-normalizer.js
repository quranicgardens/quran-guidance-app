const normalizer = {
    'ا': 'ا',
    'أ': 'ا',
    'إ': 'ا',
    'آ': 'ا',
    'ٱ': 'ا',
    'ب': 'ب',
    'ت': 'ت',
    'ث': 'ث',
    'ج': 'ج',
    'ح': 'ح',
    'خ': 'خ',
    'د': 'د',
    'ذ': 'ذ',
    'ر': 'ر',
    'ز': 'ز',
    'س': 'س',
    'ش': 'ش',
    'ص': 'ص',
    'ض': 'ض',
    'ط': 'ط',
    'ظ': 'ظ',
    'ع': 'ع',
    'غ': 'غ',
    'ف': 'ف',
    'ق': 'ق',
    'ك': 'ك',
    'ل': 'ل',
    'م': 'م',
    'ن': 'ن',
    'ه': 'ه',
    'ة': 'ة',
    'و': 'و',
    'ؤ': 'ؤ',
    'ي': 'ي',
    'ى': 'ي',
    'ئ': 'ئ',
    'ءِ': 'ء',
    'ً': '',
    'ٌ': '',
    'ٍ': '',
    'َ': '',
    'ُ': '',
    'ِ': '',
    'ّ': '',
    'ْ': '',
    'ٓ': '',
    'ٔ': '',
    'ٕ': '',
    ' ': ' '
}

function normalizeArabic(text) {
    const normalizedText = Array.from(text).map(letter => normalizer[letter]).join("")

    return normalizedText
}
export const normalizeText = (text) => {
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
  
export default normalizeArabic