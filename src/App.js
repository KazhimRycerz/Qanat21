import React, { useState } from "react";
import {  
  BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './scss/App.scss';
import Page404 from './pages/Page404.jsx';
import Home from './pages/Home.jsx';
//import 'Name' from './Name';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/Qanat21" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          {/* <Route path="/PersonalData" element={<PersonalData />} />
          <Route path="/Motivation" element={<Motivation />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/References" element={<References />} />
          <Route path="/MyFuture" element={<MyFuture />} />
          <Route path="/ContactAndSocialMedia" element={<ContactAndSocialMedia />} /> */}
        </Routes>
      </Router>

    </>
  );
}

export default App;
