import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getsPokemons();
  }, []);

  const getsPokemons = async () => {
    try {
      const endpoints = [];
      for (let i = 1; i <= 1025; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }

      // Use axios.all to make parallel requests
      const response = await axios.all(endpoints.map((endpoint) => axios.get(endpoint)));

      // Extract the data from each response
      const pokemonData = response.map((res) => res.data);

      setPokemons(pokemonData);
    } catch (error) {
      console.error("Error fetching pokemons:", error);
    }
  };

  return (
    <>
      <NavBar />
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <p>{pokemon.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Pokedex;
