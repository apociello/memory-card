import Card from '../components/Card';
import cardList from '../data/data.js';
import '../styles/GamePage.css';

export default function GamePage({ playGame, playClick }) {
  return (
    <div className="game-page-wrapper">
      <header>
        <button
          className="back-btn"
          onClick={() => {
            playClick();
            playGame(false);
          }}
        >
          <span className="arrow"></span>
        </button>

        <p>Score: 7</p>
        <p>Best Score:10</p>
      </header>
      <main className="game-board">
        <Card card={cardList[4]} />
        <Card card={cardList[5]} />
        <Card card={cardList[9]} />
        <Card card={cardList[16]} />
      </main>
    </div>
  );
}
