import React from "react";
import Dhome from "./routes";
import GameDrive from "./components/gamedrive";
import HikingAndClimbing from "./components/hikingandclimbing";
import BeachHolidays from "./components/beachholidays";

function App(){
  return (
    <div>
      <Dhome />
      <GameDrive/>
      <HikingAndClimbing/>
      <BeachHolidays/>
      {/* <Balloon/> */}
      

    </div>
  );
}

export default App;