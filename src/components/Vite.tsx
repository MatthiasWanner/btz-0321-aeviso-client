import React, { useState } from "react";
import logo from "../logo.svg";

function Vite() {
  const [count, setCount] = useState(0);
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello Vite + React!</p>
      <p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </p>
      <>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </>
      <p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {" | "}
        <a
          className="App-link"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </a>
      </p>
    </header>
  );
}

export default Vite;
