import React from "react";
import Home from "../home";
import GreenAdd from "../green";
import Specialty from "../speciality";
import Clients from "../clients";
import Subscribers from "../subscribers";
import LetsHelp from "../letshelp";
import WhyChooseUs from "../whychooseus";
// import './style.css';


function Dhome(){
  return (
    <div className="layout">
     <Home/>
     <GreenAdd/>
     <Specialty/>
     <Clients/>
     <WhyChooseUs/> 
     <LetsHelp/> 
     <Subscribers/>
    </div>
  );
};

export default Dhome;