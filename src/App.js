import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header text-center">Dictionary</header>
        <Dictionary />
        <footer className="App-footer text-center small">
          Coded by Sue McMillan and open-sourced on{" "}
          <a
            href="https://github.com/Strumhum/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
