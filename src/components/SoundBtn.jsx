export default function SoundBtn({soundOn, toggleSound, playClick}){
    return (
        <button
          className="mc-button secondary"
          onClick={() => {
            toggleSound();
            playClick(true);
          }}
        >
          Sound: {soundOn ? 'ON' : 'OFF'}
        </button>
    )
}