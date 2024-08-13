import React from "react";
import Home from "./components/home";
import GreenAdd from "./components/green";
import Specialty from "./components/speciality";
import Clients from "./components/clients";
import Subscribers from "./components/subscribers";
import Destinations from "./components/destinations";
import LetsHelp from "./components/letshelp";
import WhyChooseUs from "./components/whychooseus";
import Cultural from "./components/cultural";
import Historical from "./components/historical";





function Dhome(){
  return (
    <div>
     <Home/>
     <GreenAdd/>
     <Specialty/>
     <Clients/>
     <Destinations/>
     <WhyChooseUs/> 
     <LetsHelp/> 
     <Subscribers/>
     <Cultural/>
     <Historical/>
    </div>
  );
};

export default Dhome;