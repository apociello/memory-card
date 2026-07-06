export default function PlayBtn({ playGame, playClick }) {
  return (
    <button
      className="mc-button play"
      onClick={() => {
        playClick();
        playGame(true);
      }}
    >
      Play
    </button>
  );
}
