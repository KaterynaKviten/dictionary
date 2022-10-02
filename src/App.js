import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
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
