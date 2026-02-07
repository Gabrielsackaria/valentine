import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable'; 
import Spotify from './components/spotify';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [inputDate, setInputDate] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const anniversaryDate = "2023-05-12"; 
  const slideshowImages = [
    "/pic1.jpg",
    "/pic2.jpg",
    "/pic3.jpg",
    "/pic4.jpg",
    "/pic5.jpg",
    "/pic6.jpg",
  ];

  // --- LETTER CONTENT (for animation) ---
  const letterLines = [
    "A letter to my sweet boy 🥹💞",
    "I still remember the first day we met like it was yesterday 🥹. How easily we connected, as if we weren't strangers at all.",
    "If someone had asked me back then whether I'd be this in love with you, I probably would've said no 🥲—because our relationship truly is the best unexpected thing to ever happen to either of us.",
    "You changed my perspective on men. You made me believe that not all men are the same—you really are different 😌.",
    "I love the patience you have with me, the way you look at me so effortlessly, and how you handle me with such care, as if I'm some fragile masterpiece 🥺.",
    "You really are my sweet boy 🥹, and I love you more with each passing day. Loving you feels effortless—you really do make it that easy 🥺.",
    "There are no amount of words that could fully express how I truly feel. If only you could feel what I feel, then maybe you'd know 🤍.",
    "I pray that we always fight for each other, and that God gives us the strength to keep going even when we feel like giving up 🙏🏾❤️.",
    "I'd choose you over and over again—in this life and the next. Being with you truly is my favorite part of life 🥺.",
    "HAPPY VALENTINE'S, baby 🥺🥹💖"
  ];
  

  useEffect(() => {
    if (isLoggedIn && currentPage === "home") {
      const interval = setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % slideshowImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isLoggedIn, currentPage, slideshowImages.length]);

  const handleLogin = () => {
    if (inputDate === anniversaryDate) {
      setIsLoggedIn(true);
    } else {
      alert("Incorrect date. 🔒");
    }
  };

  /* ---------- LOGIN SCREEN ---------- */
  if (!isLoggedIn) {
    return (
      <div className="app-container">
        <div className="glass-card animate-up">
          <h1 className="brand-title">SoulScript</h1>
          <p>Enter our special date to unlock 💞</p>
          <input
            type="date"
            className="premium-input"
            onChange={(e) => setInputDate(e.target.value)}
          />
          <button className="premium-btn" onClick={handleLogin}>
            Unlock
          </button>
        </div>
        <div className="background-blobs" />
      </div>
    );
  }

  /* ---------- DASHBOARD ---------- */
  return (
    <div className="app-container dashboard">

      {/* SIDEBAR */}
      <nav className={`glass-sidebar ${menuOpen ? 'active' : ''}`}>
        <div className="brand">Us.</div>
        <ul>
          <li onClick={() => setCurrentPage("home")} className={currentPage === 'home' ? 'active-link' : ''}>🏠 Home</li>
          <li onClick={() => setCurrentPage("letter")} className={currentPage === 'letter' ? 'active-link' : ''}>💌 Love Letter</li>
          <li onClick={() => setCurrentPage("reasons")} className={currentPage === 'reasons' ? 'active-link' : ''}>✨ Reasons</li>
        </ul>
      </nav>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </button>

      <main className="content-area">
        {currentPage === "home" && (
          <div className="glass-panel has-slideshow">
            <div className="slideshow-wrapper">
              {slideshowImages.map((img, index) => (
                <div
                  key={index}
                  className={`slide ${index === currentImageIndex ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${img})` }}
                />
              ))}
              <div className="slideshow-overlay" />
            </div>

            <div className="relative-content">
              <h1 className="hero-text">Welcome Home, My Love 🤍</h1>
              <p>This space was made just for us.</p>
            </div>
          </div>
        )}

        {currentPage === "letter" && (
          <div className="glass-panel scroll-y">
            <div className="relative-content letter-container">
              <h2>My Letter to You 💌</h2>
              <div className="letter-body">
                {letterLines.map((line, index) => (
                  <p key={index} className={`letter-line delay-${index + 1}`}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentPage === "reasons" && (
          <div className="glass-panel scroll-y">
            <div className="relative-content">
              <h2>Reasons Why I Love You ✨</h2>
              <p>Coming soon...</p>
            </div>
          </div>
        )}
      </main>

      {/* ✅ SPOTIFY FLOATING – MOBILE SAFE */}
      <Draggable bounds="body">
        <div className="music-player-wrapper draggable-widget floating-spotify">
          <div className="drag-handle">⠿ Drag</div>
          <Spotify />
        </div>
      </Draggable>

      <div className="background-blobs" />
    </div>
  );
}

export default App;