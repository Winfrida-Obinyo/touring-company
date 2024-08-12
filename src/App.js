import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import GreenAdd from "./components/green";
import Specialty from "./components/speciality";
import Clients from "./components/clients";
import Subscribers from "./components/subscribers";
import Footer from "./components/footer";
import Accommodation from "./components/accommodation";
import Destinations from "./components/destinations";
// import LetsHelp from "./components/letshelp";
// import WhyChooseUs from "./components/whychooseus";




function App(){
  return (
    <div>
     <Navbar/>
     <Home/>
     <GreenAdd/>
     <Specialty/>
     <Clients/>
     <Destinations/>
     {/* <WhyChooseUs/> 
     <LetsHelp/>  */}

     <Subscribers/>
     <Footer/>
     <Accommodation/>     

    </div>
  );
};

export default App;