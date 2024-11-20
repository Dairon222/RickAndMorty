import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList.jsx";
import "./all.css";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    name: "",
    status: "",
    gender: "",
    species: "",
  });

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        if (!response.ok) {
          throw new Error("Errorrrrrrrr");
        }
        const result = await response.json();
        setCharacters(result.results);
        setFilteredCharacters(result.results);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCharacters();
  }, []);

  useEffect(() => {
    const filtros = () => {
      let filtrar = characters;

      if (filters.name) {
        filtrar = filtrar.filter((character) =>
          character.name.toLowerCase().includes(filters.name.toLowerCase())
        );
      }

      if (filters.status) {
        filtrar = filtrar.filter(
          (character) => character.status === filters.status
        );
      }

      if (filters.gender) {
        filtrar = filtrar.filter(
          (character) => character.gender === filters.gender
        );
      }

      if (filters.species) {
        filtrar = filtrar.filter((character) =>
          character.species
            .toLowerCase()
            .includes(filters.species.toLowerCase())
        );
      }

      setFilteredCharacters(filtrar);
    };

    filtros();
  }, [filters, characters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h1>Personajes de Rick and Morty</h1>

      <div className="filters">
        <input
          type="text"
          name="name"
          placeholder="Buscar por nombre"
          value={filters.name}
          onChange={handleFilterChange}
        />

        <select
          name="status"
          onChange={handleFilterChange}
          value={filters.status}
        >
          <option value="">Estado (Todos)</option>
          <option value="Alive">Vivo</option>
          <option value="Dead">Muerto</option>
          <option value="unknown">Desconocido</option>
        </select>

        <select
          name="gender"
          onChange={handleFilterChange}
          value={filters.gender}
        >
          <option value="">Género (Todos)</option>
          <option value="Male">Masculino</option>
          <option value="Female">Femenino</option>
          <option value="unknown">Desconocido</option>
        </select>

        <select
          name="species"
          onChange={handleFilterChange}
          value={filters.species}
        >
          <option value="">Especie (Todos)</option>
          <option value="Human">Humano</option>
          <option value="Alien">Alien</option>
        </select>

      </div>

      <CharacterList characters={filteredCharacters} />
    </div>
  );
};

export default App;
