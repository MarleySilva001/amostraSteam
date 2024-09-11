import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./Pokedex.module.css";
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
      const response = await axios.all(endpoints.map((endpoint) => axios.get(endpoint)));
      const pokemonData = response.map((res) => res.data);
      setPokemons(pokemonData);
    } catch (error) {
      console.error("Error fetching pokemons:", error);
    }
  };

  return (
    <>
    <div className={styles.tudo}>
      <NavBar />
      <ul className={styles.gridContainer}>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name} className={styles.gridItem}>
            <img src={pokemon.sprites.front_default} alt="" />
            <p>{pokemon.name}</p>
          </li>
        ))}
      </ul>
      </div>
    </>
  );
};

export default Pokedex;
