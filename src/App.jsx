import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import necessary components

import Home from './Home';
import Singin from './Singin';


export default function App() {
  return (
    
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sign-in" element={<Singin/>} />
        
      </Routes>
      
    </BrowserRouter>
  );
}

