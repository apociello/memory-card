import { useState } from 'react';
import Card from '../components/Card';
import cardList from '../data/data.js';
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
  playGame,
  playClick,
  bestScore,
  setBestScore,
}) {
  const [score, setScore] = useState(0);
  const [currentCards, setCurrentCards] = useState(() =>
    getRandomCards(INITIAL_CARDS),
  );
  const [chosenCardIds, setChosenCardIds] = useState([]);

  function nextRound(newScore) {
    if (newScore === cardList.length) {
      console.log('You won!');
    } else {
      setCurrentCards(getRandomCards(currentCards.length + CARD_INCREMENT));
      setChosenCardIds([]);
      console.log('next round');
    }
  }

  function resetGame() {
    setScore(0);
    setChosenCardIds([]);
    setCurrentCards(getRandomCards(INITIAL_CARDS));
  }

  function pickCard(cardId) {
    const alreadyChosen = chosenCardIds.includes(cardId);

    if (alreadyChosen) {
      resetGame();
      console.log('GAME OVER!');
    } else {
      const newScore = score + 1;
      setScore(newScore);
      if (newScore > bestScore) setBestScore(newScore);
      setChosenCardIds([...chosenCardIds, cardId]);

      if (chosenCardIds.length + 1 === currentCards.length) {
        nextRound(newScore);
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
      <main className="game-board">
        {currentCards.map((card) => (
          <Card key={card.id} card={card} pickCard={pickCard} />
        ))}
      </main>
    </div>
  );
}
