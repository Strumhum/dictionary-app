import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        <div className="Meaning">
          {props.meaning.definition}
          <div className="example">{props.meaning.example}</div>
        </div>
        <Synonyms synonyms={props.meaning.synonyms} />
      </section>
    </div>
  );
}
