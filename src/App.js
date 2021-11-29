import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from "./pages/AboutMe";
import NavBar from "./components/NavBar/NavBar";
import Portfolio from './pages/Portfolio';
//import LandingPage from "./pages/LandingPage";
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';
import background from './images/ocean.jpg'



function App() {
  return (
    <Router>
      <body style={{ 
      backgroundImage: `url(${background})` 
    }}>
        <div class="container">
          <div class="row">
            <NavBar/>
          </div>
          <main class="row">
            {/* <div class="container">         */}
              <Routes>
                <Route exact path="/" element={<AboutMe/>} />
                <Route exact path="/portfolio" element={<Portfolio/>} />
                <Route exact path="/contact" element={<Contact/>} />
                <Route exact path="/resume" element={<Resume/>} />
              </Routes>          
            {/* </div> */}
          </main>
          <div class="row" >
            <Footer/>
          </div>
        </div>
      </body>
      
    </Router>
      
  );
}

export default App;
