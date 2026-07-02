import MusicBtn from '../components/MusicBtn';
import SoundBtn from '../components/SoundBtn';
import '../styles/HomePage.css';

export default function HomePage({
  musicOn,
  soundOn,
  playGame,
  toggleMusic,
  toggleSound,
  playClick,
}) {
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
        <SoundBtn
          soundOn={soundOn}
          toggleSound={toggleSound}
          playClick={playClick}
        />

        <MusicBtn
          musicOn={musicOn}
          toggleMusic={toggleMusic}
          playClick={playClick}
        />
      </footer>
    </>
  );
}
