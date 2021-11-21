import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from "./components/AboutMe/AboutMe";
import NavBar from "./components/NavBar/NavBar";
import Portfolio from './components/Portfolio/Portfolio';
//import LandingPage from "./pages/LandingPage";
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<AboutMe/>} />
          <Route exact path="/portfolio" element={<Portfolio/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/resume" element={<Resume/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
      
  );
}

export default App;
