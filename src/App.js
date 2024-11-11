// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ItemDetailPage from './pages/ItemDetailPage';
import './styles/styles.css'; // Importando o CSS normal

function App() {
  return (
    <Router>
      <header className="topbar">
        <nav>
          <a href="/">Home</a>
          <a href="/about">Sobre</a>
        </nav>
      </header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/item/:id" element={<ItemDetailPage />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>© 2024 - TCC BRUNO - CSR. Todos os direitos reservados.</p>
      </footer>
    </Router>
  );
}

export default App;
