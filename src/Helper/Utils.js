export const getTypeInArabic = (type) => {
    return type === 'Meccan' ? 'مكية' : 'مدنية';
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