export default function playBtn({ playGame, playClick }) {
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
