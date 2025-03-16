import React from "react";
import { Link } from "react-router-dom";

export function MotoonChaptersTemplate(chapters, matnTitle) {
    return (
        <>
        <style>{`
            body {
              direction: rtl;
              text-align: right;
            }
            `}</style>
    <div className="container mt-3 ">
        <h3>{matnTitle}</h3>
        <ul className="list-group mt-3 px-0">
            {chapters.map((chapter) => (
                <li key={chapter.Id} className="list-group-item">
                    <Link to={`${window.Constants.shatibyahRoute}/chapters/${chapter.Id}`} className="text-decoration-none">
                        {chapter.title}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
    </>
);
}