import Navbar from "./components/Navbar";
import Meme from "./components/Meme";
import "./components/styles/App.css";

export default function Home() {
  return (
    <>
      <div className="app">
    <Navbar/>
    <Meme/>
      </div>
    </>
  );
}