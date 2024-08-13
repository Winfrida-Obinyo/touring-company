import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import GreenAdd from "./components/green";
import Specialty from "./components/speciality";
import Clients from "./components/clients";
import Subscribers from "./components/subscribers";
import Footer from "./components/footer";
import Accommodation from "./components/accomodation";
import Destinations from "./components/destinations";
import LetsHelp from "./components/letshelp";
import WhyChooseUs from "./components/whychooseus";
import Cultural from "./components/cultural";
import Historical from "./components/historical";




function App(){
  return (
    <div>
     <Navbar/>
     <Home/>
     <GreenAdd/>
     <Specialty/>
     <Clients/>
     <Destinations/>
     <WhyChooseUs/> 
     <LetsHelp/>   

     <Subscribers/>
     <Footer/>
     <Accommodation/>
     <Cultural/>
     <Historical/>
     
     
     
    
    

    

     

     
     

    </div>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Dhome />}>
    //       {/* Other routes can be nested here */}
    //       {/* <Route path="accommodation" element={<Accommodation />} /> */}
    //     </Route>
    //   </Routes>
    // </Router>
  );
}

export default App;