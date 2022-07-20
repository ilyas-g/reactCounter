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

  console.log("buttonMinus : " + buttonMinus);
  return (
    <div className="App">
      <div>
        {counter === 0 ? '' : buttonMinus}
        <p>Counter: {counter}</p>
        {counter === 10 ? '' : buttonPlus}

        {/* {buttonPlus}
        {buttonMinus} */}
        <br />
        <br />
        <Button
          counter={counter}
          setCounter={setCounter}
          text="Reset"
        />
      </div>
      {/* <hr />
      <div>
        <h1>Ready to Go</h1>
      </div> */}
    </div >
  );
}

export default App;
