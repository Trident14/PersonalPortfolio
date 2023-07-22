import React from 'react';
import  Navbar from './components/navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainSection from './components/mainSection.js';
import './Style/App.css'
import Via from './via.js';



const App = () => {
  return (
    <>    
      <div>
        <Router>
          <Navbar />
            <Routes>
              <Route path='/home' element={<MainSection /> } />
              <Route path='/' element={<MainSection /> } />
              <Route path='/GridConquest' element={<Via LinkToPage={"/gridConquest"} /> } />
              <Route path='/CoffeeMate'   element={<Via LinkToPage={"/CoffeeMate"}/>} />
                
            </Routes>
          </Router>
      </div>
    </>
  );
};

export default App;