import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  const increment = () => setCount(count + step);

  const decrement = () => {
    if (count - step >= 0) {
      setCount(count - step);
    } else {
      setCount(0);
    }
  };

  const reset = () => setCount(0);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <div className="counter-card">
        <div className="header">
          <h1>Counter</h1>
          <button className="theme-btn" onClick={toggleTheme}>
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        <div className="count">{count}</div>

        <div className="step-selector">
          <span>Step:</span>
          {[1, 5, 10].map((value) => (
            <button
              key={value}
              className={`step-btn ${step === value ? "active" : ""}`}
              onClick={() => setStep(value)}
            >
              +{value}
            </button>
          ))}
        </div>

        <div className="buttons">
          <button
            className="btn decrease"
            onClick={decrement}
            disabled={count === 0}
          >
            −{step}
          </button>

          <button className="btn reset" onClick={reset}>
            Reset
          </button>

          <button className="btn increase" onClick={increment}>
            +{step}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
