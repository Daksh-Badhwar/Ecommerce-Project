import React from 'react';
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/nopage/NoPage";


function App() {
  

  return (
   <Router>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/*" element={<NoPage/>}/>
  </Routes>
   </Router>
  )
}

export default App
