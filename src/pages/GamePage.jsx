import { useState } from 'react';
import Card from '../components/Card';
import cardList from '../data/data.js';
import '../styles/GamePage.css';

export default function GamePage({ playGame, playClick }) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [currentCards, setCurrentCards] = useState(getRandomCards(4));
  const [chosenCardIds, setChosenCardIds] = useState([]);

  function getRandomCards(numCards) {
    const newList = [];

    for (let i = 0; i < numCards; i++) {
      let repeated = 1;

      while (repeated) {
        repeated = 0;
        let chosenIndex = Math.floor(Math.random() * cardList.length);

        for (let j = 0; j < newList.length && !repeated; j++) {
          if (newList[j].id === cardList[chosenIndex].id) {
            repeated = 1;
          }
        }

        if (!repeated) newList.push(cardList[chosenIndex]);
      }
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

  function pickCard(cardId) {
    let repeated = 0;

    for (let i = 0; i < chosenCardIds.length && !repeated; i++) {
      if (chosenCardIds[i] === cardId) {
        console.log('GAME OVER!');
        setScore(0);
        setChosenCardIds([]);
        repeated = 1;
      }
    }

    if (!repeated) {
      setScore(score + 1);
      if (score + 1 > bestScore) setBestScore(bestScore + 1);
      const newArray = [...chosenCardIds];
      newArray.push(cardId);
      setChosenCardIds(newArray);
      if (score + 1 === currentCards.length) console.log('You won!');
    }

    setCurrentCards(shuffleCards(currentCards));
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
