import '../styles/HomePage.css';

export default function HomePage() {
  return (
    <>
      <main className="home">
        <div className="title-wrapper">
          <img src="/logo.svg" className="logo" alt="" />
          <h2>Memory  Game!</h2>
        </div>
        <div className="button-wrapper">
          <button className="mc-button play">Play</button>
        </div>
      </main>
      <footer>
        <button className="mc-button secondary">Sound</button>
        <button className="mc-button secondary">Music</button>
      </footer>
    </>
  );
}
