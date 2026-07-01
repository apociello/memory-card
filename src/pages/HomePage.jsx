import { useRef, useState } from 'react';
import '../styles/HomePage.css';

export default function HomePage({ playGame }) {
  const musicRef = useRef(null);
  const clickSoundRef = useRef(new Audio('/sounds/click.mp3'));

  const [musicOn, setMusicOn] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

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
      <main className="home">
        <div className="title-wrapper">
          <img src="/images/logo.svg" className="logo" alt="" />
          <h2>Memory Game!</h2>
        </div>
        <div className="button-wrapper">
          <button
            className="mc-button play"
            onClick={() => {
              playClick();
              playGame(true);
            }}
          >
            Play
          </button>
        </div>
      </main>

      <footer>
        <button
          className="mc-button secondary"
          onClick={() => {
            toggleSound();
            playClick(true);
          }}
        >
          Sound: {soundOn ? 'ON' : 'OFF'}
        </button>

        <audio ref={musicRef} src="/music/sweden.mp3" loop></audio>
        <button
          className="mc-button secondary"
          onClick={() => {
            toggleMusic();
            playClick();
          }}
        >
          Music: {musicOn ? 'ON' : 'OFF'}
        </button>
      </footer>
    </>
  );
}
