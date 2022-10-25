import React from 'react';
import GlobalStyle from './globalStyles';
import { Routes, Route, Outlet, Navigate, BrowserRouter } from 'react-router-dom'
import { Home } from './components/Home/Home';




function App() {   
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />        
        <Home />        
      </BrowserRouter>
      
    </div> 
    
  )
}

export default App
