import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <span className="Phonetic">
      <a href={props.phonetic.audio} target="blank">
        Listen
      </a>
    </span>
  );
}
