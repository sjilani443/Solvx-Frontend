import React from 'react';
import './App.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Header from './Components/Header';
import Courses from './Pages/Courses';
import Footer from './Components/Footer'
import ScrollToTop from "./Components/ScrolltoTop";
import Aboutus from './Pages/Aboutus';
import Contact from './Pages/Contact';
import Joinus from './Pages/Joinus';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path='/about us' element={<Aboutus/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/join us' element={<Joinus/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
