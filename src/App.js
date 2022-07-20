import './App.css';
import { useState } from "react";
import Button from './components/button/Button';

function App() {

  const [counter, setCounter] = useState(0);

  const buttonPlus = <Button
    counter={counter}
    setCounter={setCounter}
    text="+"
  />;

  const buttonMinus = <Button
    counter={counter}
    setCounter={setCounter}
    text="-"
  />;

  return (
    <div className="App">
      <div>
        {counter === 0 ? '' : buttonMinus}
        <p>Counter: {counter}</p>
        {counter === 10 ? '' : buttonPlus}
        <br />
        <Button
          counter={counter}
          setCounter={setCounter}
          text="Reset"
        />
      </div>
    </div >
  );
}

export default App;
