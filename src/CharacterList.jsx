/* eslint-disable react/prop-types */
import React from "react";
import CharacterCard from "./CharacterCard.jsx";
import "./all.css";

const CharacterList = ({ characters }) => {
  return (
    <div className="card-grid">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
