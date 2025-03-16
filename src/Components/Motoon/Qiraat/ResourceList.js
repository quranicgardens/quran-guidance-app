import React from 'react';

const resources = [
  {
    Title: "شرح الشاطبية للشيخ عبدالرشيد صوفى",
    Link: "https://archive.org/details/Shatebiah-Sofi",
  },
  {
    Title: "شرح الشاطبية للشيخ عدنان بن عبدالرحمن العرضي",
    Link: "https://midad.com/lesson/291364/%D9%85%D9%82%D8%AF%D9%85%D8%A9-%D9%84%D8%B9%D9%84%D9%85-%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D8%A1%D8%A7%D8%AA",
  },
];

const ResourceList = () => {
  return (
    <div className="container">
          <style>{`
body {
  direction: rtl;
  text-align: right;
}
`}</style>

      <h1>شرح الشاطبية</h1>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            <a href={resource.Link} target="_blank" rel="noopener noreferrer">
              {resource.Title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
