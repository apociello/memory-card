export default function Card({ card, pickCard }) {
  return (
    <button
      className="card"
      onClick={() => {
        pickCard(card.id);
      }}
    >
      <div className="img-wrapper">
        <img src={`/images/cards/${card.img}`} alt="" draggable="false" />
      </div>
      <p>{card.name}</p>
    </button>
  );
}
