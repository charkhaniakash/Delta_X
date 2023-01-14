// import { Head } from 'react-bootstrap';
import React from 'react';
import './App.css';
import Addartist from './components/Addartist';
import Addsongs from './components/Addsongs';
import Home from './components/Home';
import Toptenart from './components/Toptenart';
import Head from "./components/Head";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Head />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/toptenart" element={<Toptenart />} />
          <Route path="/addsongs" element={<Addsongs />} />
          <Route path="/addartist" element={<Addartist />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
