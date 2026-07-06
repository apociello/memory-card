import { useRef, useState } from 'react';
import cardList from '../data/data.js';
import Card from '../components/Card';
import LoadingBar from '../components/LoadingBar.jsx';
import Modal from '../components/Modal.jsx';
import '../styles/GamePage.css';

const INITIAL_CARDS = 4;
const CARD_INCREMENT = 2;

function getRandomCards(numCards) {
  const newList = [];

  while (newList.length < numCards) {
    const chosenIndex = Math.floor(Math.random() * cardList.length);
    const chosenCard = cardList[chosenIndex];
    const alreadyPicked = newList.some((card) => card.id === chosenCard.id);
    if (!alreadyPicked) newList.push(chosenCard);
  }

  return newList;
}

function shuffleCards(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function GamePage({
  soundOn,
  playGame,
  playClick,
  bestScore,
  setBestScore,
}) {
  const correctSoundRef = useRef(new Audio('/sounds/wood.mp3'));
  const failSoundRef = useRef(new Audio('/sounds/hit.mp3'));
  const levelSoundRef = useRef(new Audio('/sounds/level_up.ogg'));
  const victorySoundRef = useRef(new Audio('/sounds/victory.ogg'));

  function playSound(ref) {
    if (soundOn) {
      ref.current.currentTime = 0;
      ref.current.play();
    }
  }

  const [score, setScore] = useState(0);
  const [currentCards, setCurrentCards] = useState(() =>
    getRandomCards(INITIAL_CARDS),
  );
  const [chosenCardIds, setChosenCardIds] = useState([]);
  const [gameResult, setGameResult] = useState('');

  function nextRound() {
    if (currentCards.length === cardList.length) {
      playSound(victorySoundRef);
      setGameResult('win');
    } else {
      const preNumCards = currentCards.length + CARD_INCREMENT;
      const maxCards = cardList.length;
      const numCards = Math.min(preNumCards, maxCards);

      setCurrentCards(getRandomCards(numCards));
      setChosenCardIds([]);
      playSound(levelSoundRef);
    }
  }

  function resetGame() {
    setScore(0);
    setChosenCardIds([]);
    setCurrentCards(getRandomCards(INITIAL_CARDS));
    setGameResult('');
  }

  function pickCard(cardId) {
    const alreadyChosen = chosenCardIds.includes(cardId);

    if (alreadyChosen) {
      setGameResult('lose');
      playSound(failSoundRef);
    } else {
      playSound(correctSoundRef);

      const newScore = score + 1;
      setScore(newScore);
      if (newScore > bestScore) setBestScore(newScore);
      setChosenCardIds([...chosenCardIds, cardId]);

      if (chosenCardIds.length + 1 === currentCards.length) {
        nextRound();
      } else {
        setCurrentCards(shuffleCards(currentCards));
      }
    }
  }

  return (
    <div className="game-page-wrapper">
      <header>
        <button
          className="back-btn"
          aria-label="Go back to home"
          onClick={() => {
            playClick();
            playGame(false);
          }}
        >
          <span className="arrow"></span>
        </button>

        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </header>

      <div className="loading-bar-wrapper">
        <LoadingBar total={currentCards.length} points={chosenCardIds.length} />
      </div>

      <main className="game-board">
        {currentCards.map((card) => (
          <Card key={card.id} card={card} pickCard={pickCard} />
        ))}
      </main>

      {gameResult && (
        <Modal
          gameResult={gameResult}
          score={score}
          resetGame={resetGame}
          playGame={playGame}
          playClick={playClick}
        />
      )}
    </div>
  );
}
