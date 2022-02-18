import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
const name = "Isaac";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome message={name}/>
      </header>
    </div>
  );
}

export default App;
