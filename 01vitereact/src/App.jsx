import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter == 20) {
      setCounter((counter = 20));
    } else {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter == 0) {
      setCounter((counter = 0));
    } else {
      setCounter(counter - 1);
    }
  };

  let myObje = {
    username: "abdullah",
    age: 23,
  };

  let newArr = [1, 2, 3];
  return (
    <>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      {/* <Card channel="Chaiaurcode" sameObj={myObje} array={newArr} />  Passing values from one component */}
      <Card username="Abu bakar" btnText="Click me" />
      <Card username="Abdullah" btnText="Read me" />
    </>
  );
}

export default App;
