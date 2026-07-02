import MusicBtn from '../components/MusicBtn';
import SoundBtn from '../components/SoundBtn';
import '../styles/GamePage.css';

export default function GamePage({
  musicOn,
  soundOn,
  playGame,
  toggleMusic,
  toggleSound,
  playClick,
}) {
  return (
    <div className="game-page-wrapper">
      <header>
        <div className="back-btn-container">
          <button
            className="back-btn"
            onClick={() => {
              playClick();
              playGame(false);
            }}
          >
            <span className="arrow"></span>
          </button>
        </div>

        <div className="scores">
          <p>Score: 7</p>
          <p>Best Score:10</p>
        </div>

        <div className="sound-settings">
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
        </div>
      </header>
      <main className="game-board">
        <h1>CARDS GO HERE</h1>
      </main>
    </div>
  );
}
