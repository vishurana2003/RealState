import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './Components/DarkModeContext';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Sections/Login'; // Login Page Component
import Signup from './Sections/Signup'; // Signup Page Component
import About from './Sections/About';
import Properties from './Sections/Properties';
import PopularAreas from './Sections/PopularAreas';
import Hero from './Sections/Hero';
import Clients from './Sections/Clients';
import Contact from './Sections/Contact';
import Services from './Sections/Services';


const App = () => {
  return (
    <Router>
      <DarkModeProvider>
       
        <Routes>
          {/* Login and Signup routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* All other sections are combined on the main page */}
          <Route path="/" element={
            <>
             <Header />
              <Hero />
              <About />
              <PopularAreas />
              <Properties />
              <Services />
              <Clients />
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
        
      </DarkModeProvider>
    </Router>
  );
};

export default App;
