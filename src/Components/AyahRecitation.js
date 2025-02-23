// import React, { useState, useEffect, useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const AyahRecitation = () => {
//   const audioRef = useRef(null);

//   // The Ayah (verse) text to be recited
//   const ayahText = "الحمد لله رب العالمين";

//   // Break the Ayah into words
//   const words = ayahText.split(" ");

//   // Use state to track the index of the currently highlighted word
//   const [currentWordIndex, setCurrentWordIndex] = useState(null);

//   useEffect(() => {
//     const audio = audioRef.current;

//     // Calculate word timings dynamically based on audio duration and number of words
//     const wordTimings = [];
//     audio.onloadedmetadata = () => {
//       const totalDuration = audio.duration; // The total duration of the audio
//       const durationPerWord = totalDuration / words.length;

//       // Generate the word timings
//       for (let i = 0; i < words.length; i++) {
//         wordTimings.push(i * durationPerWord);
//       }

//       // Update the current word based on the audio time
//       const updateWordHighlight = () => {
//         const currentTime = audio.currentTime;

//         // Find the index of the word that should be highlighted based on the current time
//         for (let i = 0; i < wordTimings.length; i++) {
//           if (currentTime >= wordTimings[i] && (i === wordTimings.length - 1 || currentTime < wordTimings[i + 1])) {
//             setCurrentWordIndex(i);
//             break;
//           }
//         }
//       };

//       // Attach timeupdate event listener to update the current word
//       audio.addEventListener("timeupdate", updateWordHighlight);

//       return () => {
//         audio.removeEventListener("timeupdate", updateWordHighlight);
//       };
//     };
//   }, [words.length]);

//   // Handle audio play
//   const handlePlay = () => {
//     audioRef.current.play();
//   };

//   // Handle audio pause
//   const handlePause = () => {
//     audioRef.current.pause();
//   };

//   return (
//     <div className="container mt-5">
//       <h3>Ayah Recitation</h3>
//       <p>
//         {words.map((word, index) => (
//           <span
//             key={index}
//             style={{
//               fontWeight: currentWordIndex === index ? "bold" : "normal",
//               color: currentWordIndex === index ? "red" : "black",
//             }}
//           >
//             {word}{" "}
//           </span>
//         ))}
//       </p>

//       <div>
//         <audio ref={audioRef} src="https://everyayah.com/data/Husary_128kbps_Mujawwad/001002.mp3" />
//         <div>
//           <button className="btn btn-primary" onClick={handlePlay}>
//             Play
//           </button>
//           <button className="btn btn-secondary" onClick={handlePause}>
//             Pause
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

//export default AyahRecitation;



// import React, { useState, useEffect, useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const AyahRecitation = () => {
//   const audioRef = useRef(null);
//   const [audioContext, setAudioContext] = useState(null);
//   const [silenceTimes, setSilenceTimes] = useState([]);
//   const [currentWordIndex, setCurrentWordIndex] = useState(null);
  
//   // The Ayah (verse) text to be recited
//   //const ayahText = "In the name of Allah, the Most Gracious, the Most Merciful";
//   const ayahText = "الحمد لله رب العالمين";
//   // Break the Ayah into words
//   const words = ayahText.split(" ");

//   // Calculate the total length of the Ayah (total number of characters)
//   const totalLength = ayahText.replace(/\s+/g, "").length;

//   useEffect(() => {
//     const audio = audioRef.current;

//     // Create AudioContext only once
//     const context = new (window.AudioContext || window.webkitAudioContext)();
//     setAudioContext(context);

//     // Ensure to set up the source node and analyser node only once
//     const audioSource = context.createMediaElementSource(audio);
//     const analyser = context.createAnalyser();
    
//     // Connect the source to the analyser and the analyser to the context destination
//     audioSource.connect(analyser);
//     analyser.connect(context.destination);

//     // Function to detect silence during audio playback
//     const detectSilence = () => {
//       const bufferLength = analyser.frequencyBinCount;
//       const dataArray = new Uint8Array(bufferLength);

//       analyser.getByteFrequencyData(dataArray);

//       let silentDuration = 0;
//       let startSilence = 0;
//       const silenceThreshold = 5; // Adjust this for how sensitive you want silence to be

//       for (let i = 0; i < bufferLength; i++) {
//         if (dataArray[i] < silenceThreshold) {
//           if (startSilence === 0) {
//             startSilence = audio.currentTime;
//           }
//         } else {
//           if (startSilence !== 0) {
//             silentDuration += audio.currentTime - startSilence;
//             startSilence = 0;
//           }
//         }
//       }

//       // Set the silent times (this is a simple approach and can be enhanced)
//       setSilenceTimes((prevSilences) => [...prevSilences, silentDuration]);
//     };

//     // Call detectSilence every second to get the current silence time
//     const silenceInterval = setInterval(detectSilence, 1000);

//     // Clean up the interval on component unmount
//     return () => {
//       clearInterval(silenceInterval);
//     };
//   }, []);

//   useEffect(() => {
//     const audio = audioRef.current;

//     // Calculate word timings dynamically based on word length and total length
//     const wordTimings = [];
//     audio.onloadedmetadata = () => {
//       const totalDuration = audio.duration; // The total duration of the audio
//       let elapsedTime = 0;

//       // Calculate the time for each word based on its proportion of the total length
//       for (let i = 0; i < words.length; i++) {
//         const wordLength = words[i].length;
//         const wordDuration = (wordLength / totalLength) * totalDuration;
        
//         // Adjust time by excluding silence times
//         const adjustedWordDuration = wordDuration - silenceTimes.reduce((acc, time) => acc + time, 0);
//         elapsedTime += adjustedWordDuration;

//         wordTimings.push(elapsedTime);
//       }

//       // Update the current word based on the audio time
//       const updateWordHighlight = () => {
//         const currentTime = audio.currentTime;

//         for (let i = 0; i < wordTimings.length; i++) {
//           if (
//             currentTime >= wordTimings[i] &&
//             (i === wordTimings.length - 1 || currentTime < wordTimings[i + 1])
//           ) {
//             setCurrentWordIndex(i);
//             break;
//           }
//         }
//       };

//       // Attach timeupdate event listener to update the current word
//       audio.addEventListener("timeupdate", updateWordHighlight);

//       return () => {
//         audio.removeEventListener("timeupdate", updateWordHighlight);
//       };
//     };
//   }, [silenceTimes]);

//   const handlePlay = () => {
//     audioRef.current.play();
//   };

//   const handlePause = () => {
//     audioRef.current.pause();
//   };

//   return (
//     <div className="container mt-5">
//       <h3>Ayah Recitation</h3>
//       <p>
//         {words.map((word, index) => (
//           <span
//             key={index}
//             style={{
//               fontWeight: currentWordIndex === index ? "bold" : "normal",
//               color: currentWordIndex === index ? "red" : "black",
//             }}
//           >
//             {word}{" "}
//           </span>
//         ))}
//       </p>

//       <div>
//         <audio ref={audioRef} src="https://everyayah.com/data/Husary_128kbps_Mujawwad/001002.mp3" />
//         <div>
//           <button className="btn btn-primary" onClick={handlePlay}>
//             Play
//           </button>
//           <button className="btn btn-secondary" onClick={handlePause}>
//             Pause
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AyahRecitation;











// import React, { useState, useEffect, useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import normalizeArabic  from "../Helper/arabic-normalizer";
// const AyahRecitation = ({ayahText,audioUrl}) => {
//   const audioRef = useRef(null);
//   //const ayahText = "ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ"
//   //const audioUrl="https://everyayah.com/data/Husary_128kbps_Mujawwad/001002.mp3"
//   //"الحمد لله رب العالمين";
//   // The Ayah (verse) text to be recited
//   //const ayahText = "In the name of Allah, the Most Gracious, the Most Merciful";

//   // Break the Ayah into words
//   const words = ayahText.split(" ");

//   // Calculate the total length of the Ayah (total number of characters)
//   const totalLength = ayahText.replace(/\s+/g, "").length;

//   // Use state to track the index of the currently highlighted word
//   const [currentWordIndex, setCurrentWordIndex] = useState(null);

//   useEffect(() => {
//     const audio = audioRef.current;

//     // Calculate word timings dynamically based on word length and total length
//     const wordTimings = [];
//     audio.onloadedmetadata = () => {
//       const totalDuration = audio.duration; // The total duration of the audio
//       let elapsedTime = 0;

//       // Calculate the time for each word based on its proportion of the total length
//       for (let i = 0; i < words.length; i++) {
//         // Calculate word duration based on its length proportion
//         const wordLength = words[i].length;
//         const wordDuration = (wordLength / totalLength) * totalDuration;

//         elapsedTime += wordDuration; // Update elapsed time for next word
//         wordTimings.push(elapsedTime);
//       }

//       // Update the current word based on the audio time
//       const updateWordHighlight = () => {
//         const currentTime = audio.currentTime;

//         // Find the index of the word that should be highlighted based on the current time
//         for (let i = 0; i < wordTimings.length; i++) {
//           if (
//             currentTime >= wordTimings[i] &&
//             (i === wordTimings.length - 1 || currentTime < wordTimings[i + 1])
//           ) {
//             setCurrentWordIndex(i);
//             break;
//           }
//         }
//       };

//       // Attach timeupdate event listener to update the current word
//       audio.addEventListener("timeupdate", updateWordHighlight);

//       return () => {
//         audio.removeEventListener("timeupdate", updateWordHighlight);
//       };
//     };
//   }, [words.length, totalLength]);

//   // Handle audio play
//   const handlePlay = () => {
//     audioRef.current.play();
//   };

//   // Handle audio pause
//   const handlePause = () => {
//     audioRef.current.pause();
//   };

//   return (
//     <div className="container mt-5">
//       <h3>Ayah Recitation</h3>
//       <p>
//         {words.map((word, index) => (
//           <span
//             key={index}
//             style={{
//               fontWeight: currentWordIndex === index ? "bold" : "normal",
//               color: currentWordIndex === index ? "red" : "black",
//             }}
//           >
//             {word}{" "}
//           </span>
//         ))}
//       </p>

//       <div>
//         <audio ref={audioRef} src={audioUrl} />
//         <div>
//           <button className="btn btn-primary" onClick={handlePlay}>
//             Play
//           </button>
//           <button className="btn btn-secondary" onClick={handlePause}>
//             Pause
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AyahRecitation;


// import React, { useState, useEffect, useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import normalizeArabic from "../Helper/arabic-normalizer";

// const AyahRecitation = ({ ayahText, audioUrl }) => {
//   const audioRef = useRef(null);
//   const [currentWordIndex, setCurrentWordIndex] = useState(null);
//   const [isAudioLoaded, setIsAudioLoaded] = useState(false); // Track if audio is loaded

//   // Break the Ayah into words
//   const words = ayahText.split(" ");

//   // Calculate the total length of the Ayah (total number of characters)
//   const totalLength = ayahText.replace(/\s+/g, "").length;

//   useEffect(() => {
//     const audio = audioRef.current;

//     if (isAudioLoaded) {
//       const wordTimings = [];
//       audio.onloadedmetadata = () => {
//         const totalDuration = audio.duration; // The total duration of the audio
//         let elapsedTime = 0;

//         // Calculate the time for each word based on its proportion of the total length
//         for (let i = 0; i < words.length; i++) {
//           const wordLength = words[i].length;
//           const wordDuration = (wordLength / totalLength) * totalDuration;

//           elapsedTime += wordDuration;
//           wordTimings.push(elapsedTime);
//         }

//         // Update the current word based on the audio time
//         const updateWordHighlight = () => {
//           const currentTime = audio.currentTime;

//           for (let i = 0; i < wordTimings.length; i++) {
//             if (
//               currentTime >= wordTimings[i] &&
//               (i === wordTimings.length - 1 || currentTime < wordTimings[i + 1])
//             ) {
//               setCurrentWordIndex(i);
//               break;
//             }
//           }
//         };

//         // Attach timeupdate event listener to update the current word
//         audio.addEventListener("timeupdate", updateWordHighlight);

//         return () => {
//           audio.removeEventListener("timeupdate", updateWordHighlight);
//         };
//       };
//     }
//   }, [words.length, totalLength, isAudioLoaded]);

//   // Handle audio play
//   const handlePlay = () => {
//     const audio = audioRef.current;
//     audio.src = audioUrl; // Set the audio source when play is clicked
//     setIsAudioLoaded(true); // Mark the audio as loaded
//     audio.play(); // Play the audio
//   };

//   // Handle audio pause
//   const handlePause = () => {
//     const audio = audioRef.current;
//     audio.pause(); // Pause the audio
//   };

//   return (
//     <div className="container mt-5">
//       <h3>Ayah Recitation</h3>
//       <p>
//         {words.map((word, index) => (
//           <span
//             key={index}
//             style={{
//               fontWeight: currentWordIndex === index ? "bold" : "normal",
//               color: currentWordIndex === index ? "red" : "black",
//             }}
//           >
//             {word}{" "}
//           </span>
//         ))}
//       </p>

//       <div>
//         <audio ref={audioRef} />
//         <div>
//           <button className="btn btn-primary" onClick={handlePlay}>
//             Play
//           </button>
//           <button className="btn btn-secondary" onClick={handlePause}>
//             Pause
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AyahRecitation;


// import React, { useState, useEffect, useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import normalizeArabic from "../Helper/arabic-normalizer";

// const AyahRecitation = ({ ayahText, audioUrl }) => {
//   const audioRef = useRef(null);
//   const [currentWordIndex, setCurrentWordIndex] = useState(null);
//   const [isAudioLoaded, setIsAudioLoaded] = useState(false); // Track if audio is loaded

//   // Break the Ayah into words
//   const words = ayahText.split(" ");

//   // Calculate the total length of the Ayah (total number of characters)
//   const totalLength = ayahText.replace(/\s+/g, "").length;

//   useEffect(() => {
//     const audio = audioRef.current;

//     if (isAudioLoaded) {
//       const wordTimings = [];
//       audio.onloadedmetadata = () => {
//         const totalDuration = audio.duration; // The total duration of the audio
//         let elapsedTime = 0;

//         // Calculate the time for each word based on its proportion of the total length
//         for (let i = 0; i < words.length; i++) {
//           const wordLength = words[i].length;
//           const wordDuration = (wordLength / totalLength) * totalDuration;

//           elapsedTime += wordDuration;
//           wordTimings.push(elapsedTime);
//         }

//         // Update the current word based on the audio time
//         const updateWordHighlight = () => {
//           const currentTime = audio.currentTime;

//           for (let i = 0; i < wordTimings.length; i++) {
//             if (
//               currentTime >= wordTimings[i] &&
//               (i === wordTimings.length - 1 || currentTime < wordTimings[i + 1])
//             ) {
//               setCurrentWordIndex(i);
//               break;
//             }
//           }
//         };

//         // Attach timeupdate event listener to update the current word
//         audio.addEventListener("timeupdate", updateWordHighlight);

//         return () => {
//           audio.removeEventListener("timeupdate", updateWordHighlight);
//         };
//       };
//     }
//   }, [words.length, totalLength, isAudioLoaded]);

//   // Handle audio play
//   const handlePlay = () => {
//     const audio = audioRef.current;
//     audio.src = audioUrl; // Set the audio source when play is clicked
//     setIsAudioLoaded(true); // Mark the audio as loaded
//     audio.currentTime = 0; // Start from the beginning
//     audio.play(); // Play the audio
//   };

//   // Handle audio pause
//   const handlePause = () => {
//     const audio = audioRef.current;
//     audio.pause(); // Pause the audio
//   };

//   return (
//     <div className="container mt-5">
//       <h3>Ayah Recitation</h3>
//       <p>
//         {words.map((word, index) => (
//           <span
//             key={index}
//             style={{
//               fontWeight: currentWordIndex === index ? "bold" : "normal",
//               color: currentWordIndex === index ? "red" : "black",
//             }}
//           >
//             {word}{" "}
//           </span>
//         ))}
//       </p>

//       <div>
//         <audio ref={audioRef} />
//         <div>
//           <button className="btn btn-primary" onClick={handlePlay}>
//             Play
//           </button>
//           <button className="btn btn-secondary" onClick={handlePause}>
//             Pause
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AyahRecitation;


// import React, { useState, useEffect, useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import normalizeArabic from "../Helper/arabic-normalizer";

// const AyahRecitation = ({ ayahText, audioUrl }) => {
//   const audioRef = useRef(null);
//   const [currentWordIndex, setCurrentWordIndex] = useState(null);
//   const [isAudioLoaded, setIsAudioLoaded] = useState(false); // Track if audio is loaded
//   const [audioProgress, setAudioProgress] = useState(0); // Track audio progress

//   // Break the Ayah into words
//   const words = ayahText.split(" ");

//   // Calculate the total length of the Ayah (total number of characters)
//   const totalLength = ayahText.replace(/\s+/g, "").length;

//   useEffect(() => {
//     const audio = audioRef.current;

//     if (isAudioLoaded) {
//       const wordTimings = [];
//       audio.onloadedmetadata = () => {
//         const totalDuration = audio.duration; // The total duration of the audio
//         let elapsedTime = 0;

//         // Calculate the time for each word based on its proportion of the total length
//         for (let i = 0; i < words.length; i++) {
//           const wordLength = words[i].length;
//           const wordDuration = (wordLength / totalLength) * totalDuration;

//           elapsedTime += wordDuration;
//           wordTimings.push(elapsedTime);
//         }

//         // Update the current word based on the audio time
//         const updateWordHighlight = () => {
//           const currentTime = audio.currentTime;
//           setAudioProgress((currentTime / audio.duration) * 100); // Update progress bar

//           for (let i = 0; i < wordTimings.length; i++) {
//             if (
//               currentTime >= wordTimings[i] &&
//               (i === wordTimings.length - 1 || currentTime < wordTimings[i + 1])
//             ) {
//               setCurrentWordIndex(i);
//               break;
//             }
//           }
//         };

//         // Attach timeupdate event listener to update the current word
//         audio.addEventListener("timeupdate", updateWordHighlight);

//         return () => {
//           audio.removeEventListener("timeupdate", updateWordHighlight);
//         };
//       };
//     }
//   }, [words.length, totalLength, isAudioLoaded]);

//   // Handle audio play
//   const handlePlay = () => {
//     const audio = audioRef.current;
//     audio.src = audioUrl; // Set the audio source when play is clicked
//     setIsAudioLoaded(true); // Mark the audio as loaded
//     audio.currentTime = 0; // Start from the beginning
//     audio.play(); // Play the audio
//   };

//   // Handle audio pause
//   const handlePause = () => {
//     const audio = audioRef.current;
//     audio.pause(); // Pause the audio
//   };

//   // Handle progress bar change (seek functionality)
//   const handleProgressBarChange = (event) => {
//     const audio = audioRef.current;
//     const newTime = (event.target.value / 100) * audio.duration; // Calculate new time based on the progress bar
//     audio.currentTime = newTime;
//   };

//   return (
//     <div className="container mt-5">
//       <h3>Ayah Recitation</h3>
//       <p>
//         {words.map((word, index) => (
//           <span
//             key={index}
//             style={{
//               fontWeight: currentWordIndex === index ? "bold" : "normal",
//               color: currentWordIndex === index ? "red" : "black",
//             }}
//           >
//             {word}{" "}
//           </span>
//         ))}
//       </p>

//       <div>
//         <audio ref={audioRef} />
//         <div>
//           <button className="btn btn-primary" onClick={handlePlay}>
//             Play
//           </button>
//           <button className="btn btn-secondary" onClick={handlePause}>
//             Pause
//           </button>
//         </div>
        
//         {/* Progress Bar */}
//         <div className="mt-3">
//           <input
//             type="range"
//             className="form-range"
//             value={audioProgress}
//             onChange={handleProgressBarChange}
//             min="0"
//             max="100"
//           />
//           <div>Progress: {Math.round(audioProgress)}%</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AyahRecitation;



// import React, { useState, useEffect, useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import normalizeArabic from "../Helper/arabic-normalizer";

// const AyahRecitation = ({ ayahText, audioUrl }) => {
//   const audioRef = useRef(null);
//   const [currentWordIndex, setCurrentWordIndex] = useState(null);
//   const [isAudioLoaded, setIsAudioLoaded] = useState(false); // Track if audio is loaded
//   const [audioProgress, setAudioProgress] = useState(0); // Track audio progress
//   const [currentTime, setCurrentTime] = useState(0); // Track current time of the audio
//   const [duration, setDuration] = useState(0); // Track the total duration of the audio

//   // Break the Ayah into words
//   const words = ayahText.split(" ");

//   // Calculate the total length of the Ayah (total number of characters)
//   const totalLength = ayahText.replace(/\s+/g, "").length;

//   useEffect(() => {
//     const audio = audioRef.current;

//     if (isAudioLoaded) {
//       const wordTimings = [];
//       audio.onloadedmetadata = () => {
//         const totalDuration = audio.duration; // The total duration of the audio
//         setDuration(totalDuration); // Set the total duration
//         let elapsedTime = 0;

//         // Calculate the time for each word based on its proportion of the total length
//         for (let i = 0; i < words.length; i++) {
//           const wordLength = words[i].length;
//           const wordDuration = (wordLength / totalLength) * totalDuration;

//           elapsedTime += wordDuration;
//           wordTimings.push(elapsedTime);
//         }

//         // Update the current word based on the audio time
//         const updateWordHighlight = () => {
//           const currentTime = audio.currentTime;
//           setAudioProgress((currentTime / audio.duration) * 100); // Update progress bar

//           // Update current time state
//           setCurrentTime(currentTime);

//           for (let i = 0; i < wordTimings.length; i++) {
//             if (
//               currentTime >= wordTimings[i] &&
//               (i === wordTimings.length - 1 || currentTime < wordTimings[i + 1])
//             ) {
//               setCurrentWordIndex(i);
//               break;
//             }
//           }
//         };

//         // Attach timeupdate event listener to update the current word and progress bar
//         audio.addEventListener("timeupdate", updateWordHighlight);

//         return () => {
//           audio.removeEventListener("timeupdate", updateWordHighlight);
//         };
//       };
//     }
//   }, [words.length, totalLength, isAudioLoaded]);

//   // Handle audio play
//   const handlePlay = () => {
//     const audio = audioRef.current;
//     audio.src = audioUrl; // Set the audio source when play is clicked
//     setIsAudioLoaded(true); // Mark the audio as loaded
//     audio.currentTime = 0; // Start from the beginning
//     audio.play(); // Play the audio
//   };

//   // Handle audio pause
//   const handlePause = () => {
//     const audio = audioRef.current;
//     audio.pause(); // Pause the audio
//   };

//   // Handle progress bar change (seek functionality)
//   const handleProgressBarChange = (event) => {
//     const audio = audioRef.current;
//     const newTime = (event.target.value / 100) * audio.duration; // Calculate new time based on the progress bar
//     audio.currentTime = newTime;
//   };

//   // Format time in mm:ss format
//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
//   };

//   return (
//     <div className="container mt-5">
//       <h3>Ayah Recitation</h3>
//       <p>
//         {words.map((word, index) => (
//           <span
//             key={index}
//             style={{
//               fontWeight: currentWordIndex === index ? "bold" : "normal",
//               color: currentWordIndex === index ? "red" : "black",
//             }}
//           >
//             {word}{" "}
//           </span>
//         ))}
//       </p>

//       <div>
//         <audio ref={audioRef} />
//         <div>
//           <button className="btn btn-primary" onClick={handlePlay}>
//             Play
//           </button>
//           <button className="btn btn-secondary" onClick={handlePause}>
//             Pause
//           </button>
//         </div>
        
//         {/* Progress Bar with time */}
//         <div className="mt-3">
//           <input
//             type="range"
//             className="form-range"
//             value={(currentTime / duration) * 100}
//             onChange={handleProgressBarChange}
//             min="0"
//             max="100"
//           />
//           <div className="d-flex justify-content-between">
//             <span>{formatTime(currentTime)}</span>
//             <span>{formatTime(duration)}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AyahRecitation;


// import React, { useState, useEffect, useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import normalizeArabic from "../Helper/arabic-normalizer";

// const AyahRecitation = ({ ayahText, audioUrl }) => {
//   const audioRef = useRef(null);
//   const [currentWordIndex, setCurrentWordIndex] = useState(null);
//   const [isAudioLoaded, setIsAudioLoaded] = useState(false); // Track if audio is loaded
//   const [audioProgress, setAudioProgress] = useState(0); // Track audio progress
//   const [currentTime, setCurrentTime] = useState(0); // Track current time of the audio
//   const [duration, setDuration] = useState(0); // Track the total duration of the audio

//   // Break the Ayah into words
//   const words = ayahText.split(" ");

//   // Calculate the total length of the Ayah (total number of characters)
//   const totalLength = ayahText.replace(/\s+/g, "").length;

//   useEffect(() => {
//     const audio = audioRef.current;

//     if (isAudioLoaded) {
//       const wordTimings = [];
//       audio.onloadedmetadata = () => {
//         const totalDuration = audio.duration; // The total duration of the audio
//         setDuration(totalDuration); // Set the total duration
//         let elapsedTime = 0;

//         // Calculate the time for each word based on its proportion of the total length
//         for (let i = 0; i < words.length; i++) {
//           const wordLength = words[i].length;
//           const wordDuration = (wordLength / totalLength) * totalDuration;

//           elapsedTime += wordDuration;
//           wordTimings.push(elapsedTime);
//         }

//         // Update the current word based on the audio time
//         const updateWordHighlight = () => {
//           const currentTime = audio.currentTime;
//           setAudioProgress((currentTime / audio.duration) * 100); // Update progress bar

//           // Update current time state
//           setCurrentTime(currentTime);

//           for (let i = 0; i < wordTimings.length; i++) {
//             if (
//               currentTime >= wordTimings[i] &&
//               (i === wordTimings.length - 1 || currentTime < wordTimings[i + 1])
//             ) {
//               setCurrentWordIndex(i);
//               break;
//             }
//           }
//         };

//         // Attach timeupdate event listener to update the current word and progress bar
//         audio.addEventListener("timeupdate", updateWordHighlight);

//         return () => {
//           audio.removeEventListener("timeupdate", updateWordHighlight);
//         };
//       };
//     }
//   }, [words.length, totalLength, isAudioLoaded]);

//   // Handle audio play
//   const handlePlay = () => {
//     const audio = audioRef.current;
//     audio.src = audioUrl; // Set the audio source when play is clicked
//     setIsAudioLoaded(true); // Mark the audio as loaded
//     audio.currentTime = 0; // Start from the beginning
//     audio.play(); // Play the audio
//   };

//   // Handle audio pause
//   const handlePause = () => {
//     const audio = audioRef.current;
//     audio.pause(); // Pause the audio
//   };

//   // Handle progress bar change (seek functionality)
//   const handleProgressBarChange = (event) => {
//     const audio = audioRef.current;
//     const newTime = (event.target.value / 100) * audio.duration; // Calculate new time based on the progress bar
//     audio.currentTime = newTime;
//   };

//   // Format time in mm:ss format
//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
//   };

//   return (
//     <div className="container mt-5">
//       <h3>Ayah Recitation</h3>
//       <p>
//         {words.map((word, index) => (
//           <span
//             key={index}
//             style={{
//               fontWeight: currentWordIndex === index ? "bold" : "normal",
//               color: currentWordIndex === index ? "red" : "black",
//             }}
//           >
//             {word}{" "}
//           </span>
//         ))}
//       </p>

//       <div>
//         <audio ref={audioRef} />
//         <div>
//           <button className="btn btn-primary" onClick={handlePlay}>
//             Play
//           </button>
//           <button className="btn btn-secondary" onClick={handlePause}>
//             Pause
//           </button>
//         </div>
        
//         {/* Progress Bar with time */}
//         <div className="mt-3">
//           <input
//             type="range"
//             className="form-range"
//             value={(currentTime / duration) * 100}
//             onChange={handleProgressBarChange}
//             min="0"
//             max="100"
//             disabled={!isAudioLoaded} // Disable progress bar until audio is loaded
//           />
//           <div className="d-flex justify-content-between">
//             <span>{formatTime(currentTime)}</span>
//             <span>{formatTime(duration)}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AyahRecitation;



// import React, { useState, useEffect, useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import normalizeArabic from "../Helper/arabic-normalizer";

// const AyahRecitation = ({ ayahText, audioUrl }) => {
//   const audioRef = useRef(null);
//   const [currentWordIndex, setCurrentWordIndex] = useState(null);
//   const [isAudioLoaded, setIsAudioLoaded] = useState(false); // Track if audio is loaded
//   const [audioProgress, setAudioProgress] = useState(0); // Track audio progress
//   const [currentTime, setCurrentTime] = useState(0); // Track current time of the audio
//   const [duration, setDuration] = useState(0); // Track the total duration of the audio

//   // Break the Ayah into words
//   const words = ayahText.split(" ");

//   // Calculate the total length of the Ayah (total number of characters)
//   const totalLength = ayahText.replace(/\s+/g, "").length;

//   useEffect(() => {
//     const audio = audioRef.current;

//     if (isAudioLoaded) {
//       const wordTimings = [];
//       audio.onloadedmetadata = () => {
//         const totalDuration = audio.duration; // The total duration of the audio
//         setDuration(totalDuration); // Set the total duration
//         let elapsedTime = 0;

//         // Calculate the time for each word based on its proportion of the total length
//         for (let i = 0; i < words.length; i++) {
//           const wordLength = words[i].length;
//           const wordDuration = (wordLength / totalLength) * totalDuration;

//           elapsedTime += wordDuration;
//           wordTimings.push(elapsedTime);
//         }

//         // Update the current word based on the audio time
//         const updateWordHighlight = () => {
//           const currentTime = audio.currentTime;
//           setAudioProgress((currentTime / audio.duration) * 100); // Update progress bar

//           // Update current time state
//           setCurrentTime(currentTime);

//           for (let i = 0; i < wordTimings.length; i++) {
//             if (
//               currentTime >= wordTimings[i] &&
//               (i === wordTimings.length - 1 || currentTime < wordTimings[i + 1])
//             ) {
//               setCurrentWordIndex(i);
//               break;
//             }
//           }
//         };

//         // Attach timeupdate event listener to update the current word and progress bar
//         audio.addEventListener("timeupdate", updateWordHighlight);

//         return () => {
//           audio.removeEventListener("timeupdate", updateWordHighlight);
//         };
//       };
//     }
//   }, [words.length, totalLength, isAudioLoaded]);

//   // Handle audio play
//   const handlePlay = () => {
//     const audio = audioRef.current;
//     audio.src = audioUrl; // Set the audio source when play is clicked
//     setIsAudioLoaded(true); // Mark the audio as loaded
//     audio.currentTime = 0; // Start from the beginning
//     audio.play(); // Play the audio
//   };

//   // Handle audio pause
//   const handlePause = () => {
//     const audio = audioRef.current;
//     audio.pause(); // Pause the audio
//   };

//   // Handle progress bar change (seek functionality)
//   const handleProgressBarChange = (event) => {
//     const audio = audioRef.current;
//     const newTime = (event.target.value / 100) * audio.duration; // Calculate new time based on the progress bar
//     audio.currentTime = newTime;
//   };

//   // Format time in mm:ss format
//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
//   };

//   return (
//     <div className="container mt-5">
//       <h3>Ayah Recitation</h3>
//       <p>
//         {words.map((word, index) => (
//           <span
//             key={index}
//             style={{
//               fontWeight: currentWordIndex === index ? "bold" : "normal",
//               color: currentWordIndex === index ? "red" : "black",
//             }}
//           >
//             {word}{" "}
//           </span>
//         ))}
//       </p>

//       <div>
//         <audio ref={audioRef} />
//         <div>
//           <button className="btn btn-primary" onClick={handlePlay}>
//             Play
//           </button>
//           <button className="btn btn-secondary" onClick={handlePause}>
//             Pause
//           </button>
//         </div>
        
//         {/* Progress Bar with time */}
//         <div className="mt-3">
//           {/* Container for custom progress bar */}
//           <div className="progress-bar-container" style={{ position: "relative", width: "100%", height: "10px", backgroundColor: "#e0e0e0", borderRadius: "5px" }}>
//             <div
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: `${audioProgress}%`, // Adjust width based on progress
//                 height: "100%",
//                 backgroundColor: "#4caf50", // Color of played portion
//                 borderRadius: "5px 0 0 5px",
//               }}
//             />
//             <input
//               type="range"
//               className="form-range"
//               value={(currentTime / duration) * 100}
//               onChange={handleProgressBarChange}
//               min="0"
//               max="100"
//               disabled={!isAudioLoaded} // Disable progress bar until audio is loaded
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 backgroundColor: "transparent",
//                 cursor: "pointer",
//                 appearance: "none",
//               }}
//             />
//           </div>
//           <div className="d-flex justify-content-between">
//             <span>{formatTime(currentTime)}</span>
//             <span>{formatTime(duration)}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AyahRecitation;



// import React, { useState, useEffect, useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import normalizeArabic from "../Helper/arabic-normalizer";

// const AyahRecitation = ({ ayahText, audioUrl }) => {
//   const audioRef = useRef(null);
//   const [currentWordIndex, setCurrentWordIndex] = useState(null);
//   const [isAudioLoaded, setIsAudioLoaded] = useState(false); // Track if audio is loaded
//   const [audioProgress, setAudioProgress] = useState(0); // Track audio progress
//   const [currentTime, setCurrentTime] = useState(0); // Track current time of the audio
//   const [duration, setDuration] = useState(0); // Track the total duration of the audio

//   // Break the Ayah into words
//   const words = ayahText.split(" ");

//   // Calculate the total length of the Ayah (total number of characters)
//   const totalLength = ayahText.replace(/\s+/g, "").length;

//   useEffect(() => {
//     const audio = audioRef.current;

//     if (isAudioLoaded) {
//       const wordTimings = [];
//       audio.onloadedmetadata = () => {
//         const totalDuration = audio.duration; // The total duration of the audio
//         setDuration(totalDuration); // Set the total duration
//         let elapsedTime = 0;

//         // Calculate the time for each word based on its proportion of the total length
//         for (let i = 0; i < words.length; i++) {
//           const wordLength = words[i].length;
//           const wordDuration = (wordLength / totalLength) * totalDuration;

//           elapsedTime += wordDuration;
//           wordTimings.push(elapsedTime);
//         }

//         // Update the current word based on the audio time
//         const updateWordHighlight = () => {
//           const currentTime = audio.currentTime;
//           setAudioProgress((currentTime / audio.duration) * 100); // Update progress bar

//           // Update current time state
//           setCurrentTime(currentTime);

//           for (let i = 0; i < wordTimings.length; i++) {
//             if (
//               currentTime >= wordTimings[i] &&
//               (i === wordTimings.length - 1 || currentTime < wordTimings[i + 1])
//             ) {
//               setCurrentWordIndex(i);
//               break;
//             }
//           }
//         };

//         // Attach timeupdate event listener to update the current word and progress bar
//         audio.addEventListener("timeupdate", updateWordHighlight);

//         return () => {
//           audio.removeEventListener("timeupdate", updateWordHighlight);
//         };
//       };
//     }
//   }, [words.length, totalLength, isAudioLoaded]);

//   // Handle audio play
//   const handlePlay = () => {
//     const audio = audioRef.current;
//     audio.src = audioUrl; // Set the audio source when play is clicked
//     setIsAudioLoaded(true); // Mark the audio as loaded
//     audio.currentTime = 0; // Start from the beginning
//     audio.play(); // Play the audio
//   };

//   // Handle audio pause
//   const handlePause = () => {
//     const audio = audioRef.current;
//     audio.pause(); // Pause the audio
//   };

//   // Handle progress bar change (seek functionality)
//   const handleProgressBarChange = (event) => {
//     const audio = audioRef.current;
//     const newTime = (event.target.value / 100) * audio.duration; // Calculate new time based on the progress bar
//     audio.currentTime = newTime;
//   };

//   // Format time in mm:ss format
//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
//   };

//   return (
//     <div className="container mt-5">
//       <h3>Ayah Recitation</h3>
//       <p>
//         {words.map((word, index) => (
//           <span
//             key={index}
//             style={{
//               fontWeight: currentWordIndex === index ? "bold" : "normal",
//               color: currentWordIndex === index ? "red" : "black",
//             }}
//           >
//             {word}{" "}
//           </span>
//         ))}
//       </p>

//       <div>
//         <audio ref={audioRef} />
//         <div>
//           <button className="btn btn-primary" onClick={handlePlay}>
//             Play
//           </button>
//           <button className="btn btn-secondary" onClick={handlePause}>
//             Pause
//           </button>
//         </div>
        
//         {/* Progress Bar with time */}
//         <div className="mt-3" style={{ position: "relative", width: "100%" }}>
//           {/* Container for custom progress bar */}
//           <div
//             className="progress-bar-container"
//             style={{
//               position: "relative",
//               width: "100%",
//               height: "10px",
//               backgroundColor: "#e0e0e0",
//               borderRadius: "5px",
//             }}
//           >
//             <div
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: `${audioProgress}%`, // Adjust width based on progress
//                 height: "100%",
//                 backgroundColor: "#4caf50", // Color of played portion
//                 borderRadius: "5px 0 0 5px",
//               }}
//             />
//             <input
//               type="range"
//               className="form-range"
//               value={(currentTime / duration) * 100}
//               onChange={handleProgressBarChange}
//               min="0"
//               max="100"
//               disabled={!isAudioLoaded} // Disable progress bar until audio is loaded
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 backgroundColor: "transparent",
//                 cursor: "pointer",
//                 appearance: "none",
//                 zIndex: 2, // Ensure it's above the progress fill
//               }}
//             />
//             {/* The pointer styles to make it start from the left */}
//             <style>
//               {`
//                 .form-range::-webkit-slider-thumb {
//                   background-color: #007bff; /* Pointer color */
//                   width: 16px;
//                   height: 16px;
//                   border-radius: 50%;
//                   cursor: pointer;
//                   appearance: none;
//                   z-index: 3;
//                   position: relative;
//                 }
//                 .form-range::-moz-range-thumb {
//                   background-color: #007bff; /* Pointer color */
//                   width: 16px;
//                   height: 16px;
//                   border-radius: 50%;
//                   cursor: pointer;
//                 }
//                 .form-range:disabled::-webkit-slider-thumb {
//                   background-color: transparent; /* Make pointer invisible when disabled */
//                 }
//                 .form-range:disabled::-moz-range-thumb {
//                   background-color: transparent; /* Make pointer invisible when disabled */
//                 }
//               `}
//             </style>
//           </div>
//           <div className="d-flex justify-content-between">
//             <span>{formatTime(currentTime)}</span>
//             <span>{formatTime(duration)}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AyahRecitation;



import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import normalizeArabic from "../Helper/arabic-normalizer";

const AyahRecitation = ({ ayahText, audioUrl }) => {
  const audioRef = useRef(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(null);
  const [isAudioLoaded, setIsAudioLoaded] = useState(false); // Track if audio is loaded
  const [audioProgress, setAudioProgress] = useState(0); // Track audio progress
  const [currentTime, setCurrentTime] = useState(0); // Track current time of the audio
  const [duration, setDuration] = useState(0); // Track the total duration of the audio
  const [isPlaying, setIsPlaying] = useState(false); // Track if audio is playing

  // Break the Ayah into words
  const words = ayahText.split(" ");

  // Calculate the total length of the Ayah (total number of characters)
  const totalLength = ayahText.replace(/\s+/g, "").length;

  useEffect(() => {
    const audio = audioRef.current;

    if (isAudioLoaded) {
      const wordTimings = [];
      audio.onloadedmetadata = () => {
        const totalDuration = audio.duration; // The total duration of the audio
        setDuration(totalDuration); // Set the total duration
        let elapsedTime = 0;

        // Calculate the time for each word based on its proportion of the total length
        for (let i = 0; i < words.length; i++) {
          const wordLength = words[i].length;
          const wordDuration = (wordLength / totalLength) * totalDuration;

          elapsedTime += wordDuration;
          wordTimings.push(elapsedTime);
        }

        // Update the current word based on the audio time
        const updateWordHighlight = () => {
          const currentTime = audio.currentTime;
          setAudioProgress((currentTime / audio.duration) * 100); // Update progress bar

          // Update current time state
          setCurrentTime(currentTime);

          for (let i = 0; i < wordTimings.length; i++) {
            if (
              currentTime >= wordTimings[i] &&
              (i === wordTimings.length - 1 || currentTime < wordTimings[i + 1])
            ) {
              setCurrentWordIndex(i);
              break;
            }
          }
        };

        // Attach timeupdate event listener to update the current word and progress bar
        audio.addEventListener("timeupdate", updateWordHighlight);

        return () => {
          audio.removeEventListener("timeupdate", updateWordHighlight);
        };
      };
    }
  }, [words.length, totalLength, isAudioLoaded]);

  // Handle audio play
  const handlePlay = () => {
    const audio = audioRef.current;
    audio.src = audioUrl; // Set the audio source when play is clicked
    setIsAudioLoaded(true); // Mark the audio as loaded
    audio.currentTime = 0; // Start from the beginning
    audio.play(); // Play the audio
    setIsPlaying(true); // Update state to indicate that audio is playing
  };

  // Handle audio pause/resume
  const handlePauseResume = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause(); // Pause the audio
      setIsPlaying(false); // Update state to indicate that audio is paused
    } else {
      audio.play(); // Resume the audio
      setIsPlaying(true); // Update state to indicate that audio is playing
    }
  };

  // Handle progress bar change (seek functionality)
  const handleProgressBarChange = (event) => {
    const audio = audioRef.current;
    const newTime = (event.target.value / 100) * audio.duration; // Calculate new time based on the progress bar
    audio.currentTime = newTime;
  };

  // Format time in mm:ss format
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="container mt-5">
      <h3>Ayah Recitation</h3>
      <p>
        {words.map((word, index) => (
          <span
            key={index}
            style={{
              fontWeight: currentWordIndex === index ? "bold" : "normal",
              color: currentWordIndex === index ? "red" : "black",
            }}
          >
            {word}{" "}
          </span>
        ))}
      </p>

      <div>
        <audio ref={audioRef} />
        <div className="d-flex gap-2">
          <button className="btn btn-primary" onClick={handlePlay}>
            Play
          </button>
          <button className="btn btn-secondary" onClick={handlePauseResume}>
            {isPlaying ? "Pause" : "Resume"} {/* Change button text based on the state */}
          </button>
        </div>
        
        {/* Progress Bar with time */}
        <div className="mt-3" style={{ position: "relative", width: "100%" }}>
          {/* Container for custom progress bar */}
          <div
            className="progress-bar-container"
            style={{
              position: "relative",
              width: "100%",
              height: "10px",
              backgroundColor: "#e0e0e0",
              borderRadius: "5px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: `${audioProgress}%`, // Adjust width based on progress
                height: "100%",
                backgroundColor: "#4caf50", // Color of played portion
                borderRadius: "5px 0 0 5px",
                zIndex:3
              }}
            />
            <input
              type="range"
              className="form-range h-100"
              value={(currentTime / duration) * 100}
              onChange={handleProgressBarChange}
              min="0"
              max="100"
              disabled={!isAudioLoaded} // Disable progress bar until audio is loaded
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                backgroundColor: "transparent",
                cursor: "pointer",
                appearance: "none",
                zIndex: 2, // Ensure it's above the progress fill
              }}
            />
            {/* The pointer styles to make it start from the left */}
            <style>
              {`
                .form-range::-webkit-slider-thumb {
                  background-color: #007bff; /* Pointer color */
                  width: 16px;
                  height: 16px;
                  border-radius: 50%;
                  cursor: pointer;
                  appearance: none;
                  z-index: 4;
                  position: relative;
                }
                .form-range::-moz-range-thumb {
                  background-color: #007bff; /* Pointer color */
                  width: 16px;
                  height: 16px;
                  border-radius: 50%;
                  cursor: pointer;
                }
                .form-range:disabled::-webkit-slider-thumb {
                  background-color: transparent; /* Make pointer invisible when disabled */
                }
                .form-range:disabled::-moz-range-thumb {
                  background-color: transparent; /* Make pointer invisible when disabled */
                }
              `}
            </style>
          </div>
          <div className="d-flex mt-3 justify-content-between">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AyahRecitation;
