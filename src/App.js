import React from "react";
import {Routes, Route} from 'react-router-dom'
import './scss/App.scss';
import Page404 from './pages/Page404.jsx';
import Home from './pages/Home.jsx';
import TheSystem from './pages/TheSystem.jsx';
import TheGoal from './pages/TheGoal.jsx';
import TheTeam from './pages/TheTeam.jsx';


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
        </Routes>
    </>
  );
}

export default App;
