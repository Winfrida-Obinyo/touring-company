import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import './style.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;