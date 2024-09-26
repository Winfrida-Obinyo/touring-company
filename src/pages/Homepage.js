import React from "react";
import Home from '../components/home'
import GreenAdd from "../components/green";
import Specialty from "../components/speciality";
import Clients from "../components/clients";
import WhyChooseUs from "../components/whychooseus";
import LetsHelp from "../components/letshelp";
import Subscribers from "../components/subscribers";
// import ContactUs from "../components/contactUs";





export default function Homepage() {
    return (
        <div>
            <Home />
            <GreenAdd />
            <Specialty />
            <WhyChooseUs />
            <LetsHelp />
            <Clients /> 
            <Subscribers />   
            {/* <ContactUs/>      */}
        </div>
    )
}