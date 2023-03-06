import React from "react";
import {Routes, Route} from 'react-router-dom'
import './scss/App.scss';
import Page404 from './pages/Page404.jsx';
import Home from './pages/Home.jsx';
import TheSystem from './pages/TheSystem.jsx';
import TheGoal from './pages/TheGoal.jsx';
import TheTeam from './pages/TheTeam.jsx';
//import 'Name' from './Name';


function App() {
  return (
    <>
        <Routes>
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/qanat21" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/thesystem" element={<TheSystem />} />
          <Route path="/thegoal" element={<TheGoal />} />
          <Route path="/theteam" element={<TheTeam />} />
          {/* <Route path="/PersonalData" element={<PersonalData />} />
          <Route path="/Motivation" element={<Motivation />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/References" element={<References />} />
          <Route path="/MyFuture" element={<MyFuture />} />
          <Route path="/ContactAndSocialMedia" element={<ContactAndSocialMedia />} /> */}
        </Routes>
    </>
  );
}

export default App;
