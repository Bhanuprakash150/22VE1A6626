import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage.jsx';

import Header from './components/header.jsx';
import Footer from './components/Footer.jsx';
 // For layout and general styles

function App() {
  return (
    <Router>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
         
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;