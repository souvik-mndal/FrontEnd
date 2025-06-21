import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [ data , updation ] = useState(0);
  function increment(){
    updation((data) => ++data);
    // console.log(data);
  }
  function decrement(){
    updation((data) => --data);
    // console.log(data);
  }
  return (
    <>
      <h1>Counter</h1>
      <div className="wrap">
        
      <button className="inc" onClick={increment}>Increment</button>
      <h3>{data}</h3>
      <button className="dec" onClick={decrement}>Decrement</button>
      </div>
    </>
  );
}

export default App;
