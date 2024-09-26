import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import Homepage from "./pages/Homepage";
import Accommodation from "./components/accommodation";
import GameDrive from './components/gamedrive';
import BeachHolidays from './components/beachholidays';
import HikingAndClimbing from './components/hikingandclimbing';
import Cultural from './components/cultural';
import Historical from './components/historical';
import Testimonials from './components/testimonials';
import Safaris from './pages/safaris';
import ContactUs from './components/contactUs'
import ComingSoon from './components/Comingsoon';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index
            element=
            {
              <AppLayout>
                <Homepage />
              </AppLayout>
            }
          />
          <Route
            path="/accommodation"
            element=
            {
              <AppLayout>
                <Accommodation />
              </AppLayout>
            }
          />
          <Route
            path="/game-drives"
            element={
              <AppLayout>
                <GameDrive />
              </AppLayout>
            }
          />
          <Route
            path="/beach-holidays"
            element={
              <AppLayout>
                <BeachHolidays />
              </AppLayout>
            }
          />
          <Route
            path="/mountain-climbing"
            element={
              <AppLayout>
                <HikingAndClimbing />
              </AppLayout>
            }
          />
          <Route
            path="/cultural-visits"
            element={
              <AppLayout>
                <Cultural />
              </AppLayout>
            }
          />
          <Route
            path="/historical-visits"
            element={
              <AppLayout>
                <Historical />
              </AppLayout>
            }
          />
          <Route
            path="/safaris"
            element={
              <AppLayout>
                <Safaris />
              </AppLayout>
            }
          />
          <Route
            path="/client-testimonial"
            element={
              <AppLayout>
                <Testimonials />
              </AppLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <AppLayout>
                <ContactUs />
              </AppLayout>
            }
          />
          <Route
            path="*"
            element={
              <AppLayout>
                <ComingSoon />
              </AppLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;