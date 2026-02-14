import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import './spotify.css';

function SpotifyEmbed() {
  const embedRef = useRef(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const trackURIs = [
    'spotify:track:3S8vvFMc0L8RZGIGXBBEcd', // I Wanna Know - Joe
    'spotify:track:1Rf6m1EdbCrcbugs7USmVZ', // Brown Eyes - Destiny's Child
    'spotify:track:47BBI51FKFwOMlIiX6m8ya', // Because You Loved Me - Celine Dion
    'spotify:track:4P4x7OTEROMEptDOpO4jog', // So Into You - Tamia
    'spotify:track:6RtPijgfPKROxEzTHNRiDp', // Dangerously in Love - Beyoncé
    'spotify:track:2O7YKnBEKPoCw4b06Y4CYf', // Mirrors - Justin Timberlake
    'spotify:track:1xznGGDReH1oQq0xzbwXa3', // You're Still The One - Shania Twain
    'spotify:track:1z3ugFmUKoCzGsI6jdY4Ci', // Boo'd Up - Ella Mai (closest match)
  ];

  useEffect(() => {
    const embedElement = embedRef.current;
    function updateEmbed() {
      const currentTrackURI = trackURIs[currentTrackIndex];
      const embedSource = `https://open.spotify.com/embed/track/${currentTrackURI.split(':')[2]}`;
      embedElement.src = embedSource;
    }
    updateEmbed();
  }, [currentTrackIndex, trackURIs]);

  const goForward = () => setCurrentTrackIndex((currentTrackIndex + 1) % trackURIs.length);
  const goBackward = () => setCurrentTrackIndex((currentTrackIndex - 1 + trackURIs.length) % trackURIs.length);

  return (
    <div className="spotify-widget-content">
      <div id="spotify-embed-container">
        <h4 style={{margin: '0 0 10px 0', fontFamily: 'Inter'}}>Our Love Songs</h4>
        <iframe
          ref={embedRef}
          title="Spotify Embed"
          width="100%"
          height="152" 
          frameBorder="0"
          allowTransparency="true"
          allow="encrypted-media"
          style={{borderRadius: '15px'}}
        ></iframe>
      </div>

      <div className="mini-controls">
          <Icon icon="majesticons:arrow-left" className="ctrl-btn" onClick={goBackward} />
          <Icon icon="majesticons:arrow-right" className="ctrl-btn" onClick={goForward} />
      </div>
    </div>
  );
}

export default SpotifyEmbed;