import React from 'react';
const titlePage="Quran PDF Viewer-English";
const pdfPath = 'https://dn790000.ca.archive.org/0/items/TheGloriousQuranWordToWordTranslationInEnglish/TheGloriousQuran.pdf'; // Replace with actual path
const QuranViewerEn = () => {
  return (
    document.title=titlePage,
    <div className="container text-center mt-5">
      <h1>{titlePage}</h1>
      <iframe
      src="https://archive.org/embed/thegloriousquran_201911"
      width="100%" height="700px" frameborder="0"
      webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true"
    ></iframe>
      {/* PDF Viewer (embed the PDF) */}
      {/* <embed
        src={pdfPath} // Replace with actual path
        type="application/pdf"
        width="80%"
        height="500px"
        className="pdf-viewer"
      /> */}

      {/* Download Button */}
      <div className="mt-3">
        <a
          href={pdfPath} // Replace with actual path
          download="quran-en.pdf"
          className="btn btn-primary"
        >
          Download Quran with english PDF
        </a>
      </div>
    </div>
  );
};

export default QuranViewerEn;
