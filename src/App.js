
// import './App.css';
// import AppFooter from './Components/Footer';
// import ItemLinksList from './Components/ItemLinksList';
// import AppHeader from './Components/Header';
// import { Routes, BrowserRouter, Route, Navigate, useNavigate } from "react-router-dom";
// import Profile from './Components/Profile';
// import PageNotFound from './Components/PageNotFound';
// import React, { useState, useEffect } from 'react';
// //import AddItemLink from './Components/AddItemLink';
// import LoginPage from './Components/LoginPage';
// import SurahList from './Components/ar/SurahList';
// import SurahViewer from './Components/ar/SurahViewer';
// import SurahListEn from './Components/en/SurahList';
// import SurahViewerEn from './Components/en/SurahViewer';
// import QuranViewerEn from './Components/en/QuranViewer';
// import Main from './Components/Motoon/Qiraat/Main';
// import ChapterList from './Components/Motoon/Qiraat/ChapterList';
// import BaytsByChapter from './Components/Motoon/Qiraat/BaytsByChapter';
// import AllBaytsSearch from './Components/Motoon/Qiraat/AllBayts';
// import * as Constants from './Helper/Constants';
// import itemLinks from './Data/AppItemLinks';
// import EntireQuranSearch from './Components/ar/EntireQuranSearch';
// import QuranSearch from './Components/ar/QuranSearch';
// import AyahRecitation from './Components/AyahRecitation';
// import en from './Langs/en';
// import ar from './Langs/ar';
// import { setSiteLang } from './Helper/Utils';
// import ResourceList from './Components/Motoon/Qiraat/ResourceList';
// function App() {
//   window.Constants = Constants
// let resources={}
//   resources.ar = ar
//   resources.en = en
//   window.resources = resources
//   localStorage.setItem("resources", JSON.stringify(resources))
//   //setSiteLang("en")
//   document.title = Constants.AppName;
//   // const UserContext = createContext();
//   // const [user, setUser] = useState("Jesse Hall");
//   const [isLoggedIn, setisLoggedIn] = useState(false);
//   // const [itemLinks, setItemLinks] = useState([]);
//   // useEffect(()=>{
//   //   fetch("/home-links.json")
//   //   .then(response => response.json())
//   //   .then(data => setItemLinks(data))

//   // },[])

//   useEffect(() => {
//     if (localStorage.getItem("token") == "ahmed") {
//       setisLoggedIn(true)
//     }
//     else {
//       setisLoggedIn(false)

//     }
//   }

//     , []);
//   console.log(itemLinks)
//   // if (isLoggedIn)
//   return (
//     <>

//       {/* <UserContext.Provider value={user}> */}

//       <BrowserRouter 
//       basename={Constants.BaseUrl}
//       >
//         <AppHeader />
//         <Routes>
//           <>
//             {itemLinks && <Route path="" element={<ItemLinksList data={itemLinks} />} />}
//             <Route path="/surahs" element={<SurahList />} />
//             <Route path="/en/surahs" element={<SurahListEn />} />
//             <Route path="/QuranSearch" element={<QuranSearch />} />
//             <Route path="/AyahRecitation" element={<AyahRecitation />} />

//             <Route path="/EntireQuranSearch" element={<EntireQuranSearch />} />
//             <Route path="surahs/:surahNumber" element={<SurahViewer />} />
//             <Route path="en/surahs/:surahNumber" element={<SurahViewerEn />} />
//             <Route path="en/surahs/:surahNumber/:ayahNumber" element={<SurahViewerEn />} />

//             <Route path={Constants.QuranEnglishRoute} element={<QuranViewerEn />} />
//             {/* shatibyah */}
//             <Route path={Constants.shatibyahRoute} element={<Main />} />
//             <Route path={Constants.shatibyahRoute+"/resources"} element={<ResourceList />} />
//             <Route path={Constants.shatibyahRoute + "/chapters"} element={<ChapterList />} />
//             <Route path={Constants.shatibyahRoute + "/allbayts"} element={<AllBaytsSearch />} />
//             <Route path={Constants.shatibyahRoute + "/chapters/:chapterId"} element={<BaytsByChapter />} />
//             {/* dorrah */}
//             <Route path={Constants.dorrahRoute} element={<Main />} />
//             <Route path={Constants.dorrahRoute + "/chapters"} element={<ChapterList />} />
//             <Route path={Constants.dorrahRoute + "/allbayts"} element={<AllBaytsSearch />} />
//             <Route path={Constants.dorrahRoute + "/chapters/:chapterId"} element={<BaytsByChapter />} />
//             {/* tybah*/}
//             <Route path={Constants.tybahRoute} element={<Main />} />
//             <Route path={Constants.tybahRoute + "/chapters"} element={<ChapterList />} />
//             <Route path={Constants.tybahRoute + "/allbayts"} element={<AllBaytsSearch />} />
//             <Route path={Constants.tybahRoute + "/chapters/:chapterId"} element={<BaytsByChapter />} />

//             <Route path="/login" element={<LoginPage handleLogin={setisLoggedIn} />} />
//             {/* {itemLinks.length>0 && <Route path="" element={ <AppItemLinksList data={itemLinks}/> }/>}   */}

//             <Route path="/profile/:id" element={isLoggedIn ? <Profile /> : <LoginPage handleLogin={setisLoggedIn} />} />
//             <Route path="*" element={<PageNotFound />} />
//           </>
//         </Routes>
//         <AppFooter />
//       </BrowserRouter>

//       {/* </UserContext.Provider> */}

//     </>
//   )
// }
// // else {
// //   return(<LoginPage />)
// // }


// export default App;




import './App.css';
import en from './Langs/en';
import ar from './Langs/ar';
import AppFooter from './Components/Footer';
import AppHeader from './Components/Header';
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, BrowserRouter, Route,HashRouter } from "react-router-dom";
import * as Constants from './Helper/Constants';
import itemLinks from './Data/AppItemLinks';

// Lazy load the components
const ItemLinksList = lazy(() => import('./Components/ItemLinksList'));
const SurahList = lazy(() => import('./Components/ar/SurahList'));
const SurahViewer = lazy(() => import('./Components/ar/SurahViewer'));
const SurahListEn = lazy(() => import('./Components/en/SurahList'));
const SurahViewerEn = lazy(() => import('./Components/en/SurahViewer'));
const QuranViewerEn = lazy(() => import('./Components/en/QuranViewer'));
const Main = lazy(() => import('./Components/Motoon/Qiraat/Main'));
const ChapterList = lazy(() => import('./Components/Motoon/Qiraat/ChapterList'));
const BaytsByChapter = lazy(() => import('./Components/Motoon/Qiraat/BaytsByChapter'));
const AllBaytsSearch = lazy(() => import('./Components/Motoon/Qiraat/AllBayts'));
const LoginPage = lazy(() => import('./Components/LoginPage'));
const Profile = lazy(() => import('./Components/Profile'));
const PageNotFound = lazy(() => import('./Components/PageNotFound'));
const EntireQuranSearch = lazy(() => import('./Components/ar/EntireQuranSearch'));
const QuranSearch = lazy(() => import('./Components/ar/QuranSearch'));
const AyahRecitation = lazy(() => import('./Components/AyahRecitation'));
const ResourceList = lazy(() => import('./Components/Motoon/Qiraat/ResourceList'));

function App() {
  window.Constants = Constants;
  let resources = {};
  resources.ar = ar;
  resources.en = en;
  window.resources = resources;
  localStorage.setItem("resources", JSON.stringify(resources));

  document.title = Constants.AppName;
  
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") === "ahmed") {
      setisLoggedIn(true);
    } else {
      setisLoggedIn(false);
    }
  }, []);

  return (
    <HashRouter
    // basename={Constants.BaseUrl}
     >
      <AppHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={itemLinks && <ItemLinksList data={itemLinks} />} />
          <Route path="/surahs" element={<SurahList />} />
          <Route path="/en/surahs" element={<SurahListEn />} />
          <Route path="/QuranSearch" element={<QuranSearch />} />
          <Route path="/AyahRecitation" element={<AyahRecitation />} />
          <Route path="/EntireQuranSearch" element={<EntireQuranSearch />} />
          <Route path="surahs/:surahNumber" element={<SurahViewer />} />
          <Route path="en/surahs/:surahNumber" element={<SurahViewerEn />} />
          <Route path="en/surahs/:surahNumber/:ayahNumber" element={<SurahViewerEn />} />
          <Route path={Constants.QuranEnglishRoute} element={<QuranViewerEn />} />
          
          {/* Shatibyah */}
          <Route path={Constants.shatibyahRoute} element={<Main />} />
          <Route path={Constants.shatibyahRoute + "/resources"} element={<ResourceList />} />
          <Route path={Constants.shatibyahRoute + "/chapters"} element={<ChapterList />} />
          <Route path={Constants.shatibyahRoute + "/allbayts"} element={<AllBaytsSearch />} />
          <Route path={Constants.shatibyahRoute + "/chapters/:chapterId"} element={<BaytsByChapter />} />

          {/* Dorrah */}
          <Route path={Constants.dorrahRoute} element={<Main />} />
          <Route path={Constants.dorrahRoute + "/chapters"} element={<ChapterList />} />
          <Route path={Constants.dorrahRoute + "/allbayts"} element={<AllBaytsSearch />} />
          <Route path={Constants.dorrahRoute + "/chapters/:chapterId"} element={<BaytsByChapter />} />

          {/* Tybah */}
          <Route path={Constants.tybahRoute} element={<Main />} />
          <Route path={Constants.tybahRoute + "/chapters"} element={<ChapterList />} />
          <Route path={Constants.tybahRoute + "/allbayts"} element={<AllBaytsSearch />} />
          <Route path={Constants.tybahRoute + "/chapters/:chapterId"} element={<BaytsByChapter />} />
          
          {/* Login & Profile */}
          <Route path="/login" element={<LoginPage handleLogin={setisLoggedIn} />} />
          <Route path="/profile/:id" element={isLoggedIn ? <Profile /> : <LoginPage handleLogin={setisLoggedIn} />} />
          
          {/* 404 Not Found */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <AppFooter />
    </HashRouter>
  );
}

export default App;
