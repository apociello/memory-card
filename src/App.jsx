import './App.css';

export default function App() {
  return (
    <video autoPlay loop muted playsInline className="bg-video">
      <source src="/fox.mp4" type="video/mp4" />
    </video>
  );
}
