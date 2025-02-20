import React from "react";
import { Link } from "react-router-dom";

export function MotoonChaptersTemplate(chapters) {
    return <div className="container mt-3">
        <h3>Chapters List</h3>
        <ul className="list-group">
            {chapters.map((chapter) => (
                <li key={chapter.Id} className="list-group-item">
                    <Link to={`${window.Constants.shatibyahRoute}/chapters/${chapter.Id}`} className="text-decoration-none">
                        {chapter.title}
                    </Link>
                </li>
            ))}
        </ul>
    </div>;
}