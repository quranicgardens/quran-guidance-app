// src/App.js
import React from "react";
import { Link } from "react-router-dom";
import { getMatnObject } from "../../../Helper/Utils";

const Main = () => {
   const cuurentMatn = getMatnObject();
    return (

        <div className="App">
            <div className="container">
                <h1>
                    {cuurentMatn.title}
                </h1>
                {/* Links using Bootstrap button styles */}
                <div className="d-flex flex-column gap-3 mt-5">
                    <Link to={cuurentMatn.route+"/chapters"} className="btn btn-primary mr-2">
                        View Chapters
                    </Link>
                    <Link to={cuurentMatn.route+"/allbayts"} className="btn btn-primary mr-2">
                       View All Bayts
                    </Link>
                </div>

            </div>
        </div>

    );
};

export default Main;
