import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import necessary components

import Home from './Home';


export default function App() {
  return (
    
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home/>} />
        
      </Routes>
      
    </BrowserRouter>
  );
}

