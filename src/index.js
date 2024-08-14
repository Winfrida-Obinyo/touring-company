import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Accommodation from './components/accommodation';
// import Layout from './components/Layout';
// import Destination from './components/destinations'
// import GameDrive from './components/gamedrive';
// import BeachHolidays from './components/beachholidays';
// import HikingAndClimbing from './components/hikingandclimbing';
// import Cultural from './components/cultural';
// import Historical from './components/historical';
// import ComingSoon from './components/Comingsoon';

// const router = createBrowserRouter([
//   { path:"/",  element: <App /> },
//   { path: "/accommodation",  element: <Accommodation />},
//   { path: "/destinations", element: <Destination />},
//   { path: "/game-drives", element: <GameDrive />},
//   { path: "/beach-holidays", element: <BeachHolidays />},
//   { path: "/mountain-climbing", element: <HikingAndClimbing />},
//   { path: "/cultural-visits", element: <Cultural />},
//   { path: "/historical-visits", element: <Historical />},
//   { path: "/*", element: <ComingSoon />},
// ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
      {/* <Layout>
      <RouterProvider router={router} />
      </Layout> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
