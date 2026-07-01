import { useState } from 'react';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import './App.css';

export default function App() {
  const [gamePage, setGamePage] = useState(false);

  return (
    <>
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/videos/fox.mp4" type="video/mp4" />
      </video>

      {gamePage ? <GamePage /> : <HomePage playGame={setGamePage} />}
    </>
  );
}
