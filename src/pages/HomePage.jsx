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
        <button
          className="mc-button secondary"
          onClick={() => {
            toggleSound();
            playClick(true);
          }}
        >
          Sound: {soundOn ? 'ON' : 'OFF'}
        </button>

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
