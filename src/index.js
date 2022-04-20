import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Parametros from './components/Parametros';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nuevo from './components/Nuevo';
import Previo from './Previo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Previo />} />          
        <Route path="/nuevo" element={<Nuevo/>} />                  
      </Routes>      
    </BrowserRouter>
  
);

