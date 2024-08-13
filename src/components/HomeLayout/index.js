import React from 'react';
import Navbar from '../navbar';
import Home from '../home';
import GreenAdd from '../green';
import Specialty from '../speciality';
import Clients from '../clients';
import Subscribers from '../subscribers';
import Footer from '../footer';
import Destinations from '../destinations';

function HomeLayout() {
  return (
    <div>
      <Navbar />
      <Home />
      <GreenAdd />
      <Specialty />
      <Clients />
      <Subscribers />
      <Destinations />
      <Footer />
    </div>
  );
}


export default  HomeLayout;

