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

  const anniversaryDate = "2025-07-21"; 
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

  // --- 100 REASONS WHY I LOVE YOU ---
  const reasons = [
    "How we're friends before lovers🫂❤️",
    "How happy I get around you💞",
    "Your patience with me❤️",
    "Your love for me🙌🏾",
    "Your smile",
    "How you treat me with respect🥺",
    "Your kindness",
    "Your very, very personal jokes🤭",
    "How you care about me",
    "How you're bossy sometimes🤭",
    "Your personality",
    "How calm you are❤️",
    "Your passion for football",
    "Your loyalty💯",
    "Your strengths",
    "Your love for children🥺💗",
    "Your sense of humor",
    "Your confidence🙌🏾",
    "You make me feel loved",
    "You cheer me up when I'm down❤️",
    "You always make me laugh",
    "How you understand me",
    "You make me feel less alone🫂",
    "You handle every mood of mine",
    "You make relationships look easy👌🏾",
    "You make me feel important",
    "You love me regardless of my flaws💞",
    "You always brighten my day🤍",
    "You're always there to listen❤️",
    "You make me feel special🥺",
    "You treat me with loyalty",
    "You care for others🤍",
    "I feel safe around you💞",
    "You treat me gently",
    "You make life more fun🫂",
    "How you compliment me",
    "Your unconditional support",
    "Your faith in us🫂",
    "How you hype me up",
    "Your playful teasing🤭",
    "Your love for music",
    "How thoughtful you are🤍",
    "The trust I have in you",
    "I can be myself with no judgment❤️",
    "The memories we've created",
    "You calling me \"my Pele Pele\"🥺",
    "The effort you put into our relationship🥺",
    "You celebrate even my smallest wins",
    "Your connection with my family🫂",
    "Your communication skills",
    "How comfortable we are around each other🙌🏾",
    "Me being goofy doesn't bother you😝",
    "You being jealous on the low",
    "You consider my opinion",
    "You take care of me😌",
    "You make sure I know you love me🥺🫂",
    "You're my favorite person",
    "Your company is relaxing",
    "You're always trying to make sure I'm okay🫂",
    "You love helping people",
    "Your honesty✅",
    "How you fought for our relationship🥺",
    "You're my strength",
    "Your gratitude🥺",
    "Your voice",
    "Your cute personality🥹",
    "How you take my breath away",
    "How you're full of positivity",
    "Your big heart💞",
    "Your generosity",
    "Your style🤍",
    "How affectionate you are",
    "The way you healed me",
    "You value our bond🫂❤️",
    "Our small conversations",
    "How you always make time for me",
    "Your wisdom🥺",
    "How you make my world feel complete",
    "How you randomly confess your love for me🥺",
    "How you notice when I'm not okay even when I hide it",
    "How you make sure I've eaten",
    "Your maturity🙌🏾",
    "You give good advice",
    "How you don't like seeing me cry🥺",
    "How you explain things without making me feel stupid",
    "The attention you give me",
    "Your kisses🤭",
    "When we talk about our future plans😘",
    "My heart feels safe with you",
    "The way you say my name",
    "How you've shown me what love really is🥺❤️",
    "How you make loving me feel easy",
    "How you make me feel protected💗",
    "The way you've never judged me",
    "How we navigate our little disagreements🤍",
    "Your consistency",
    "Your reassurance❤️",
    "The peace I feel with you",
    "How you choose me every day🥺",
    "I love you for you🫂❤️❤️❤️"
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
              <h2>100 Reasons Why I Love You ✨</h2>
              <div className="reasons-grid">
                {reasons.map((reason, index) => (
                  <div key={index} className="reason-card">
                    <span className="reason-number">{index + 1}</span>
                    <p className="reason-text">{reason}</p>
                  </div>
                ))}
              </div>
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