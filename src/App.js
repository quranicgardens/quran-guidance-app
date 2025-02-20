
import './App.css';
import AppFooter from './Components/Footer';
import AppContactsList from './Components/ContactsList';
import AppHeader from './Components/Header';
import { Routes, BrowserRouter, Route, Navigate, useNavigate  } from "react-router-dom";
import Profile from './Components/Profile';
import PageNotFound from './Components/PageNotFound';
import React, {useState, useEffect } from 'react';
import AddContact from './Components/AddContact';
import LoginPage from './Components/LoginPage';
import SurahList from './Components/ar/SurahList';
import SurahViewer from './Components/ar/SurahViewer';
import SurahListEn from './Components/en/SurahList';
import SurahViewerEn from './Components/en/SurahViewer';
import QuranViewerEn from './Components/en/QuranViewer';
import Main from './Components/Motoon/shatibyah/Main';
import ChapterList from './Components/Motoon/shatibyah/ChapterList';
import BaytsByChapter from './Components/Motoon/shatibyah/BaytsByChapter';
import AllBaytsSearch from './Components/Motoon/shatibyah/AllBayts';
import * as Constants from './Helper/Constants';
function App() {
 window.Constants=Constants
  // const UserContext = createContext();
  // const [user, setUser] = useState("Jesse Hall");
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [contacts, setContacts] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setContacts(data))
   
  },[])

  useEffect(()=>{
    if(localStorage.getItem("token")=="ahmed"){
     setisLoggedIn(true)
    }
    else{
      setisLoggedIn(false)

  }
}

  ,[]);
  console.log(contacts)
// if (isLoggedIn)
  return (
    <>
  
  {/* <UserContext.Provider value={user}> */}
 
   <BrowserRouter>
   <AppHeader/>
      <Routes>
        <>
        {contacts && <Route path="" element={ <AppContactsList data={contacts}/> }/>}  
        <Route path="/surahs" element={<SurahList />} />
        <Route path="/en/surahs" element={<SurahListEn />} />
        
        <Route path="surahs/:surahNumber" element={<SurahViewer/>} />
        <Route path="en/surahs/:surahNumber" element={<SurahViewerEn/>} />
        <Route path="en/quranviewer/pdf" element={<QuranViewerEn/>} />
        <Route path={Constants.shatibyahRoute} element={<Main />} />
        <Route path={Constants.shatibyahRoute+"/chapters"} element={<ChapterList />} />
        <Route path={Constants.shatibyahRoute+"/allbayts"} element={<AllBaytsSearch />} />
         <Route path={Constants.shatibyahRoute+"/chapters/:chapterId"} element={<BaytsByChapter />} />
        <Route path="/login" element={<LoginPage handleLogin={setisLoggedIn}/>} />
      {/* {contacts.length>0 && <Route path="" element={ <AppContactsList data={contacts}/> }/>}   */}
      
         <Route path="/profile/:id" element={isLoggedIn?<Profile />:<LoginPage handleLogin={setisLoggedIn}/>} /> 
          <Route path="*" element={<PageNotFound />} />
          </>
      </Routes>
      <AppFooter/>
    </BrowserRouter>
    
    {/* </UserContext.Provider> */}
   
   </>
  )}
  // else {
  //   return(<LoginPage />)
  // }


export default App;
