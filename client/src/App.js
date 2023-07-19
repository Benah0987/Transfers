import React from 'react';
import './App.css';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Player from './pages/Player';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player/id" element={<Player />} />
          
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
