import './App.css';
import { useState } from "react";

function App() {

  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <button className={`${counter === 0 ? "d-none" : ""}`}
        onClick={() => { setCounter(counter - 1); }} >
        -
      </button>
      <p>Counter: {counter}</p>
      <button className={`${counter === 10 ? "d-none" : ""}`}
        onClick={() => { setCounter(counter + 1); }} >
        +</button>
      <br />
      <br />
      <button onClick={() => { setCounter(0); }}>Reset</button>
    </div >
  );
}

export default App;
