import { Analytics } from '@vercel/analytics/react';
import { useEffect, useRef, useState } from 'react';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import cardList from './data/data';
import './styles/App.css';

export default function App() {
  const musicRef = useRef(null);
  const clickSoundRef = useRef(new Audio('/sounds/click.mp3'));

  const [musicOn, setMusicOn] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [gamePage, setGamePage] = useState(false);
  const [bestScore, setBestScore] = useState(() => {
    const saved = localStorage.getItem('bestScore');
    return saved ? Number(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem('bestScore', bestScore);
  }, [bestScore]);

  // Preload all card images to avoid loading delays during gameplay
  useEffect(() => {
    cardList.forEach((card) => {
      const img = new Image();
      img.src = `/images/cards/${card.img}`;
    });
  }, []);

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

  function toggleSound() {
    setSoundOn(!soundOn);
  }

  function playClick(isToggleSoundBtn = false) {
    if (isToggleSoundBtn) {
      if (!soundOn) {
        clickSoundRef.current.currentTime = 0;
        clickSoundRef.current.play();
      }
    } else {
      if (soundOn) {
        clickSoundRef.current.currentTime = 0;
        clickSoundRef.current.play();
      }
    }
  }

  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/poster.webp"
        className="bg-video"
      >
        <source src="/videos/fox.mp4" type="video/mp4" />
      </video>

      <audio ref={musicRef} src="/music/sweden.mp3" loop></audio>

      {gamePage ? (
        <GamePage
          soundOn={soundOn}
          playGame={setGamePage}
          playClick={playClick}
          bestScore={bestScore}
          setBestScore={setBestScore}
        />
      ) : (
        <HomePage
          soundOn={soundOn}
          musicOn={musicOn}
          playGame={setGamePage}
          toggleMusic={toggleMusic}
          toggleSound={toggleSound}
          playClick={playClick}
        />
      )}

      <Analytics />
    </>
  );
}
