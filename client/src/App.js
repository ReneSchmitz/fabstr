import React from "react";
import logo from "./stories/assets/icon/fabstr.png";
import "./App.css";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Test deployment.</p>
        </header>
      </div>
    </>
  );
}

export default App;
