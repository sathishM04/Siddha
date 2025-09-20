import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import NavLink from "../Component/NavLink";
import ServiceContent from "../Component/ServiceContent";
import Nav from "../Component/Nav";
import Footer from "../Component/Footer";

const PrivateRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<NavLink />}></Route>
          <Route path="/#home" element={<NavLink />}></Route>
          <Route path="/service-Content" element={<ServiceContent />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default PrivateRoute;
