import '../styles/GamePage.css';

export default function GamePage() {
  return (
    <div className="game-page-wrapper">
      <header>
        <div className="back-btn-container">
          <button>Back</button>
        </div>

        <div className="scores">
          <p>Score: 7</p>
          <p>Best Score:10</p>
        </div>

        <div className="sound-settings">
          <button>Sound: ON</button>
          <button>Music: ON</button>
        </div>
      </header>
      <main className="game-board">
        <h1>CARDS GO HERE</h1>
      </main>
    </div>
  );
}
