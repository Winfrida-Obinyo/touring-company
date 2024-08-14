import React from "react";
// import Dhome from "./components/routes/routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
// import Accomodation from "./components/accommodation";
import Accommodation from "./components/accommodation";
import GameDrive from './components/gamedrive';
import BeachHolidays from './components/beachholidays';
import HikingAndClimbing from './components/hikingandclimbing';
import Cultural from './components/cultural';
import Historical from './components/historical';
import ComingSoon from './components/Comingsoon';
import Destination from './components/destinations';


function App(){
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />}/>  
          <Route path="/accommodation" element={<Accommodation />}/>
          <Route path="/game-drives" element={<GameDrive />}/>
          <Route path="/beach-holidays" element={<BeachHolidays />}/>
          <Route path="/mountain-climbing" element={<HikingAndClimbing />}/>
          <Route path="/cultural-visits" element={<Cultural />}/>
          <Route path="/historical-visits" element={<Historical />}/>
          <Route path="/destinations" element={<Destination />}/>
          <Route path="*" element={<ComingSoon />}/>
        </Routes>
      </BrowserRouter>     

    </div>
  );
}

export default App;