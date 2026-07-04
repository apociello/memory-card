export default function Modal({
  gameResult,
  score,
  resetGame,
  playGame,
  playClick,
}) {
  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-info">
          <h1>You {gameResult}!</h1>
          <p>
            Score: <span className="modal-score">{score}</span>
          </p>
        </div>

        <div className="modal-buttons">
          <button
            className="mc-button secondary"
            onClick={() => {
              resetGame();
              playClick();
            }}
          >
            Restart
          </button>
          <button
            className="mc-button secondary"
            onClick={() => {
              playGame(false);
              playClick();
            }}
          >
            Title screen
          </button>
        </div>
      </div>
    </div>
  );
}
