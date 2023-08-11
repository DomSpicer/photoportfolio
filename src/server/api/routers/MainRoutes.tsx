import React from "react";

import Home from "~/pages/main/Home";
import About from "~/pages/main/About";
import Services from "~/pages/main/Services";
import Portfolio from "~/pages/main/Portfolio";
import Contact from "~/pages/main/Contact";

import { Routes, Route } from 'react-router-dom';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>      
    );
};

export default MainRoutes;