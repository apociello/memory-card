import { useRef, useState } from 'react';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import './App.css';

export default function App() {
  const musicRef = useRef(null);
  const clickSoundRef = useRef(new Audio('/sounds/click.mp3'));

  const [musicOn, setMusicOn] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [gamePage, setGamePage] = useState(false);

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
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/videos/fox.mp4" type="video/mp4" />
      </video>

      <audio ref={musicRef} src="/music/sweden.mp3" loop></audio>

      {gamePage ? (
        <GamePage
          playGame={setGamePage}
          playClick={playClick}
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
    </>
  );
}
