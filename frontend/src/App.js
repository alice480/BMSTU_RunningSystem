import './App.css';
import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
// custom components
import Home from './pages/HomePage';
import About from './pages/AboutPage';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;