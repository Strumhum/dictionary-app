import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header text-center">Dictionary</header>
        <Dictionary defaultKeyword="sunset" />
        <footer className="App-footer text-center small">
          Coded by Sue McMillan and open-sourced on{" "}
          <a
            href="https://github.com/Strumhum/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
