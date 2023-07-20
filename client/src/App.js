import React from 'react';
import './App.css';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Player from './pages/Player';
import Team from './pages/Team';
import Transfer from './pages/Team';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players/:id" element={<Player />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/transfers" element={<Transfer />} />
          
          
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
