export default function Card({ card }) {
  return (
    <div key={card.id} className="card">
      <div className="img-wrapper">
        <img src={`/images/cards/${card.img}`} />
      </div>
      <p>{card.name}</p>
    </div>
  );
}
