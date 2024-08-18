import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');

  return (
    <>
      <Router>
        <Navbar title="Textutilities2" mode={mode} />
        <div className='container my-4'>
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
