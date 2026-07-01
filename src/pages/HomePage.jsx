import { useRef, useState } from 'react';
import '../styles/HomePage.css';

export default function HomePage() {
  const musicRef = useRef(null);
  const [musicOn, setMusicOn] = useState(false);

  function toggleMusic() {
    const music = musicRef.current;

    if (musicOn) {
      music.muted = true;
    } else {
      music.muted = false;
      if (music.paused) music.play();
    }

    setMusicOn(!musicOn);
  }

  return (
    <>
      <main className="home">
        <div className="title-wrapper">
          <img src="/images/logo.svg" className="logo" alt="" />
          <h2>Memory Game!</h2>
        </div>
        <div className="button-wrapper">
          <button className="mc-button play">Play</button>
        </div>
      </main>
      <footer>
        <button className="mc-button secondary">Sound: ON</button>

        <audio ref={musicRef} src="/music/sweden.mp3" loop></audio>
        <button className="mc-button secondary" onClick={toggleMusic}>
          Music: {musicOn ? 'ON' : 'OFF'}
        </button>
      </footer>
    </>
  );
}
