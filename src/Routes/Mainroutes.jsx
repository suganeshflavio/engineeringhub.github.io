import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Home from "../Home";


const Mainroutes = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path={"/"} element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Mainroutes;
