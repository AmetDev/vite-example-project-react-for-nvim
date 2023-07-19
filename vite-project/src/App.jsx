import { useState } from "react";
import "./App.css";

function App() {
  const stylesName = {
    color: "#00ff99",
  };
  const [count, setCount] = useState(0);
  const name = "AmexDev";
  const counterDec = () => {
    setCount((prev) => prev + 1);
  };
  const counterIncr = () => {
    setCount((prev) => prev - 1);
  };
  console.log(name);
  return (
    <>
      <p style={{ color: "#00ff99", fontSize: "24px" }}>{name}</p>
      <button onClick={counterDec}>Increment</button>
      <button onClick={counterIncr}>Decrement</button>
      <div>{count}</div>
    </>
  );
}

export default App;
