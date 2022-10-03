import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        <header>
          <span className="title">your favorite</span>
          <span className="App-header">Dictionary</span>
          <span className="title">🤍</span>
        </header>
      </div>
      <main>
        <Dictionary />
      </main>
      <footer>
        Coded by Kateryna Shiurkova and is
        <a href="https://github.com/KaterynaKviten" target="blank">
          {" "}
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
