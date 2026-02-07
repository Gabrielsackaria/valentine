import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable'; 
import Spotify from './components/spotify';
import './App.css';

function App() {
  // --- STATE ---
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [saidYes, setSaidYes] = useState(false);
  const [inputDate, setInputDate] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // --- CONFIGURATION (Paths restored to original) ---
  const anniversaryDate = "2023-05-12"; 
  const slideshowImages = [
    "/pic1.jpg", 
    "/pic2.jpg",
    "/pic3.jpg",
    "/pic4.jpg",
    "/pic5.jpg",
    "/pic6.jpg",
  ];

  // --- SLIDESHOW LOGIC ---
  useEffect(() => {
    if (isLoggedIn && saidYes && currentPage === "home") {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % slideshowImages.length);
      }, 5000); 
      return () => clearInterval(interval);
    }
  }, [isLoggedIn, saidYes, currentPage, slideshowImages.length]);

  // --- HANDLERS ---
  const handleLogin = () => {
    if (inputDate === anniversaryDate) {
      setIsLoggedIn(true);
    } else {
      alert("Incorrect date. Locked for security. 🔒");
    }
  };

  const moveButton = (e) => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);
    e.target.style.position = 'fixed';
    e.target.style.left = `${x}px`;
    e.target.style.top = `${y}px`;
  };

  // --- RENDER 1: LOGIN ---
  if (!isLoggedIn) {
    return (
      <div className="app-container">
        <div className="glass-card login-card animate-up">
          <div className="lock-icon">🔒</div>
          <h1 className="brand-title">SoulScript</h1>
          <p className="subtitle">Enter our special date to unlock.</p>
          <input 
            type="date" 
            className="premium-input"
            onChange={(e) => setInputDate(e.target.value)} 
          />
          <button className="premium-btn" onClick={handleLogin}>Unlock</button>
        </div>
        <div className="background-blobs"></div>
      </div>
    );
  }

  // --- RENDER 2: THE QUESTION ---
  if (!saidYes) {
    return (
      <div className="app-container">
        <div className="glass-card question-card animate-up">
          <img 
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueGZ3bmZqZzR6eXp6eXp6eXp6eXp6eXp6eXp6eXp6eXp6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9iZCZjdD1n/c7kaO8UXY0y8019Xsh/giphy.gif" 
            className="feature-img" 
            alt="Love"
          />
          <h1>Will you be my Valentine?</h1>
          <div className="action-buttons">
            <button className="premium-btn yes-btn" onClick={() => setSaidYes(true)}>Yes ❤️</button>
            <button className="premium-btn no-btn" onMouseOver={moveButton}>No</button>
          </div>
        </div>
        <div className="background-blobs"></div>
      </div>
    );
  }

  // --- RENDER 3: PREMIUM DASHBOARD ---
  return (
    <div className="app-container dashboard">
      <nav className={`glass-sidebar ${menuOpen ? 'active' : ''}`}>
        <div className="brand">Us.</div>
        <ul>
          <li onClick={() => {setCurrentPage("home"); setMenuOpen(false)}} className={currentPage === 'home' ? 'active-link' : ''}>🏠 Home</li>
          <li onClick={() => {setCurrentPage("letter"); setMenuOpen(false)}} className={currentPage === 'letter' ? 'active-link' : ''}>💌 Love Letter</li>
          <li onClick={() => {setCurrentPage("reasons"); setMenuOpen(false)}} className={currentPage === 'reasons' ? 'active-link' : ''}>✨ 100 Reasons</li>
          <li onClick={() => {setCurrentPage("future"); setMenuOpen(false)}} className={currentPage === 'future' ? 'active-link' : ''}>🚀 Future</li>
        </ul>
      </nav>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </button>

      <main className="content-area">
        {currentPage === "home" && (
          <div className="glass-panel animate-up has-slideshow">
            <div className="slideshow-wrapper">
              {slideshowImages.map((img, index) => (
                <div 
                  key={index}
                  className={`slide ${index === currentImageIndex ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${img})` }}
                />
              ))}
              <div className="slideshow-overlay"></div>
            </div>
            
            <div className="relative-content">
              <h1 className="hero-text">Welcome Home, My Love.</h1>
              <p>Explore the sidebar to see what I've prepared for you.</p>
            </div>

            {/* DRAGGABLE SPOTIFY FEATURE */}
            <Draggable bounds="parent">
              <div className="music-player-wrapper draggable-widget">
                <div className="drag-handle">⠿ Drag to move player</div>
                <Spotify />
              </div>
            </Draggable>
          </div>
        )}

        {currentPage === "letter" && (
          <div className="glass-panel animate-up scroll-y">
            <div className="relative-content">
              <h2>My Letter to You</h2>
              <p className="letter-body">Paste your long, romantic letter here...</p>
            </div>
          </div>
        )}

        {/* ... Other pages (reasons, future) follow the same structure ... */}
      </main>
      
      <div className="background-blobs"></div>
    </div>
  );
}

export default App;