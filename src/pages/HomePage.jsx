import '../styles/HomePage.css';

export default function HomePage() {
  return (
    <>
      <main className="home">
        <div className="title-wrapper">
          <img src="/title1.png" className="title1" alt="" />
          <img src="/title2.png" className="title2" alt="" />
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
