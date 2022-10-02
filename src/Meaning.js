import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      {props.meaning.definitions.map(function (definition, index) {
        console.log("def", definition);
        return (
          <div key={index}>
            <p>{definition.definition}</p>
          </div>
        );
      })}
      <em>
        <Synonyms synonyms={props.meaning.synonyms} />
      </em>
    </div>
  );
}
