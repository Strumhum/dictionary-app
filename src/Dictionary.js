import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // https://www.shecodes.io/learn/apis/dictionary documentation link
    let apiKey = `ef85b2a56a7f4e1tc1e01fdofd0bbc3b`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelsApiKey =
      "zfL4diViCR3o1OJpeC97BqDxbOhZSNF9LLLBrLb5wZzed6MIGU4lV7Hu";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `${pexelsApiKey}` };
    const setHeaders =
      ("set-cookie",
      [
        "same-site-cookie=bar; SameSite=Lax",
        "cross-site-cookie=foo; SameSite=None; Secure",
      ]);
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h5>What word would you like to look up?</h5>
          <form onSubmit={handleSubmit}>
            <input type="search" name="search-field" onChange={handleKeyword} />
          </form>
          <small className="search-tip">
            Type a word in the field above and hit ENTER to see your results
            below
          </small>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
