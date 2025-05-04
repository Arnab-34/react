import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  //let counter = 15;

  const incriment = function () {
    if (counter >=20){
      alert("Counter is already at 20 and not possible to increment");
      return setCounter(counter);
    } else {
      counter = counter +2
      return setCounter(counter);
    }
  };
  const decrement = function () {
    if (counter <= 0) {
      alert("Counter is already at 0 and not possible to decrement");
      return setCounter(counter);
    } else {
      counter = counter - 1;
      return setCounter(counter);
    }

    //counter = counter - 1;
  };

  return (
    <>
      <h1>Counter ={counter} </h1>
      <h2>Increase and decrease the counter</h2>
      <button onClick={incriment}>Increase the Counter</button> &nbsp;
      <button onClick={decrement}>Decrease the Counter</button>
      <footer>
        <h3>footer = {counter}</h3>
      </footer>
    </>
  );
}

export default App;
