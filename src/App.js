import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const reqApi=()=>{
    console.log("requaring...")
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        <img
          src="https://raw.githubusercontent.com/ratasi/rick-morty/master/src/img/rick-morty.png"
          alt="Rick & Morty"
          className="img-home"
        />
        <button onClick={reqApi} className="btn-search">Buscar Personaje</button>
      </header>
    </div>
  );
}

export default App;
