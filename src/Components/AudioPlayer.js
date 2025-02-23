import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaDownload, FaHeadphones } from "react-icons/fa";

const AudioPlayer = ({url}) => {
  const [isLoaded, setIsLoaded] = useState(false);
    const mp3Url = url;
  const handleListen = () => {
    setIsLoaded(true);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 text-center">
          {/* <h2>Listen to the MP3</h2> */}

          <div className="my-4">
            <button
              onClick={handleListen}
              className="btn btn-primary"
              disabled={isLoaded}
            >
              <FaHeadphones className="me-2" />
              {isLoaded ? "Listening..." : "Listen"}
            </button>
          </div>

          {isLoaded && (
            <div>
              <audio controls className="w-100">
                <source src={mp3Url} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
              <div className="mt-3">
                <a
                target="_blank"
                  href={mp3Url}
                  download
                  className="btn btn-success"
                >
                  <FaDownload className="me-2" />
                  Download MP3
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
