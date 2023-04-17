import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Pokemon.css";

function Pokemon() {
  let id = useParams();
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = (id) => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + id.pokemonId + "/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemon(data);
      });
  };

  useEffect(() => {
    getPokemon(id);
  }, [id]);

  return (
    <div>
        <Link to="/Pokedex"><img id="back" src="https://www.freeiconspng.com/uploads/arrow-icon-28.png" alt="Close" /></Link>
        <div className="fullcard">
        
        <h1 id="name">{pokemon.name != null && pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
        <img id="pokeimg"
            src={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
              id.pokemonId +
              ".png"
            }
            alt={pokemon.name}
          />
        <table className="details">
            <tbody >
                <tr><td>Id</td><td>#{id.pokemonId}</td></tr>
                <tr><td>Weight</td><td>{pokemon.weight/10} kg</td></tr>
                <tr><td>Height</td><td>{pokemon.height/10} m</td></tr>
                <tr><td>Base XP</td><td>{pokemon.base_experience}</td></tr>
                <tr><td>Is default?</td><td><img id="default" src={pokemon.is_default ? "https://www.freeiconspng.com/uploads/black-checkmark-png-10.png" : "https://www.freeiconspng.com/uploads/close-icon-39.png"} alt={pokemon.is_default != null ? pokemon.is_default.toString() : ""}/></td></tr>
            </tbody>
        </table>
    </div>
    </div>
  );
}

export default Pokemon;
