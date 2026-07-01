import './App.css';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <>
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/videos/fox.mp4" type="video/mp4" />
      </video>
      
      <HomePage />
    </>
  );
}
