import React, { useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import SideBar from './Components/SideBar';

import Home from './Components/Routes/Home';
import Projects from './Components/Routes/Projects';
import Testimonies from './Components/Routes/Testimonies';
import About from './Components/Routes/About';

function App() {
    return (
        <Router>
            <NavBar/>
            <div className="flex">
                <SideBar/>
                
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/testimonies' element={<Testimonies />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </div>
        </Router>
  
    )
}
export default App;