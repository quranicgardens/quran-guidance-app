// src/App.js
import React from "react";
import { Link } from "react-router-dom";


const Main = () => {
    const chapters = [
        { Id: 1, title: "المقدمة (94)\t\t\r\n" },
        { Id: 2, title: "باب الإستعاذة (5)\r\n" },
    ];

    const bayts = [
        { Id: 1, bayt: "\r\n", chapter: 0, notshbayt: "\r\n" },
        { Id: 2, bayt: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\r\n", chapter: 0, notshbayt: "بسم الله الرحمن الرحيم\r\n" },
        { Id: 3, bayt: "\r\n", chapter: 0, notshbayt: "\r\n" },
        { Id: 4, bayt: "**********************************\t\t\t\r\n", chapter: 0, notshbayt: "**********************************\t\t\t\r\n" },
        { Id: 5, bayt: "المقدمة (94)\t\t\r\n", chapter: 1, notshbayt: "المقدمة (94)\t\t\r\n" },
    ];

    return (

        <div className="App">
            <div className="container">
                <h1>الشاطبية (Shatibya Poem)</h1>
                {/* Links using Bootstrap button styles */}
                <div className="d-flex flex-column gap-3">
                    <Link to={window.Constants.shatibyahRoute+"/chapters"} className="btn btn-primary mr-2">
                        View Chapters
                    </Link>
                    <Link to={window.Constants.shatibyahRoute+"/allbayts"} className="btn btn-primary mr-2">
                       View All Bayts
                    </Link>
                </div>

            </div>
        </div>

    );
};

export default Main;
