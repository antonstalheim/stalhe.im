import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div className="hero-container">
          <p className="hero-logotype">Stalhe.im</p>
        </div>
        <div style={{ display: "flex" }}>
          <span className="hero-contact">
            <a href="mailto:hello@stalhe.im">hello@stalhe.im</a>
          </span>
        </div>
      </header>
    </div>
  );
}

export default App;
