export default function MusicBtn({ musicOn, toggleMusic, playClick }) {
  return (
    <button
      className="mc-button secondary"
      onClick={() => {
        toggleMusic();
        playClick();
      }}
    >
      Music: {musicOn ? 'ON' : 'OFF'}
    </button>
  );
}
