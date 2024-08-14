import React from "react";
// import Navbar from '../components/navbar'
import Home from '../components/home'
import GreenAdd from "../components/green";
import Specialty from "../components/speciality";
import Clients from "../components/clients";
import WhyChooseUs from "../components/whychooseus";
import LetsHelp from "../components/letshelp";
import Subscribers from "../components/subscribers";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
// import "./style.css";




export default function Homepage() {
    return (
        <div>
            <Navbar />
            <Home />
            <GreenAdd />
            <Specialty />
            <WhyChooseUs />
            <LetsHelp />
            <Clients /> 
            <Subscribers />  
            <Footer />         
        </div>
    )
}