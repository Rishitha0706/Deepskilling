import { useState } from "react";

function App() {

  const [count, setCount] = useState(5);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    alert("Hello! Member1");
  };

  const increase = () => {
    increment();
    sayHello();
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const onPress = () => {
    alert("I was clicked");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const amount = Number(
      e.target.amount.value
    );

    const euro = amount * 80;

    alert(
      "Converting to Euro Amount is " +
      euro
    );
  };

  return (
    <div style={{ margin: "30px" }}>

      <h2>{count}</h2>

      <button onClick={increase}>
        Increment
      </button>

      <br /><br />

      <button onClick={decrement}>
        Decrement
      </button>

      <br /><br />

      <button
        onClick={() =>
          sayWelcome("Welcome")
        }
      >
        Say Welcome
      </button>

      <br /><br />

      <button onClick={onPress}>
        Click on me
      </button>

      <hr />

      <h1 style={{ color: "green" }}>
        Currency Convertor!!!
      </h1>

      <form onSubmit={handleSubmit}>

        Amount:

        <input
          type="number"
          name="amount"
        />

        <br /><br />

        Currency:

        <input
          type="text"
          value="Euro"
          readOnly
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  );

}

export default App;