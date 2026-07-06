import PlayBtn from '../components/PlayBtn';
import SoundBtn from '../components/SoundBtn';
import MusicBtn from '../components/MusicBtn';
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
          <img
            src="/images/logo.svg"
            className="logo"
            alt="Minecraft logo"
            draggable="false"
          />
          <h1>Memory Game!</h1>
        </div>
        <div className="button-wrapper">
          <PlayBtn playGame={playGame} playClick={playClick} />

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
      </main>
    </>
  );
}
