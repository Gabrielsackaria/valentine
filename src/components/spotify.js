import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import './spotify.css';

function SpotifyEmbed() {
  const embedRef = useRef(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const trackURIs = [
    'spotify:track:3KkXRkHbMCARz0aVfEt68P',
    'spotify:track:5IPl8JpkbtSH1mdyq5ctSx',
    'spotify:track:609E1JCInJncactoMmkDon',
    'spotify:track:22VHOlVYBqytsrAqV8yXBK',
    'spotify:track:4VQH4VluDUOsOuDxccTeyN',
    'spotify:track:26hOm7dTtBi0TdpDGl141t',
    'spotify:track:3Eax1yebRxj6LSYpxE9Yd3',
  ];

  useEffect(() => {
    const embedElement = embedRef.current;
    function updateEmbed() {
      const currentTrackURI = trackURIs[currentTrackIndex];
      // Fixed URL string interpolation
      const embedSource = `https://open.spotify.com/embed/track/${currentTrackURI.split(':')[2]}`;
      embedElement.src = embedSource;
    }
    updateEmbed();
  }, [currentTrackIndex]);

  const goForward = () => setCurrentTrackIndex((currentTrackIndex + 1) % trackURIs.length);
  const goBackward = () => setCurrentTrackIndex((currentTrackIndex - 1 + trackURIs.length) % trackURIs.length);

  return (
    <div className="spotify-widget-content">
      <div id="spotify-embed-container">
        <h4 style={{margin: '0 0 10px 0', fontFamily: 'Inter'}}>Jordan's Playlist</h4>
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