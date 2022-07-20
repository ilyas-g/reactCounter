import './App.css';
import { useState } from "react";
import Button from './components/button/Button';

function App() {

  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <Button className={`${counter === 0 ? "d-none" : ""}`}
        counter={counter}
        setCounter={setCounter}
        text="-"
      />
      <p>Counter: {counter}</p>
      <Button className={`${counter === 10 ? "d-none" : ""}`}
        counter={counter}
        setCounter={setCounter}
        text="+"
      />
      <br />
      <br />
      <Button
        counter={counter}
        setCounter={setCounter}
        text="Reset"
      />

    </div >
  );
}

export default App;
