/* eslint-disable react/prop-types */
import React from "react";
import "./all.css";

const CharacterCard = ({ character }) => {
  return (
    <div className="card">
      <img src={character.image} alt={character.name} className="card-image" />
      <h2>{character.name}</h2>
      <p>
        <strong>Estado:</strong> {character.status}
      </p>
      <p>
        <strong>Especie:</strong> {character.species}
      </p>
      <p>
        <strong>Género:</strong> {character.gender}
      </p>
      <p>
        <strong>Origen:</strong> {character.origin.name}
      </p>
    </div>
  );
};

export default CharacterCard;
