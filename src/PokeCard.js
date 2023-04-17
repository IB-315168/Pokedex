import React from "react";
import { Link } from "react-router-dom";

function PokeCard({ id, pokemon: { key, name, url } }) {
  return (
    <td className="pokecard" key={key}>
      <Link to={"/pokemon/"+id}>
        <div id="link">
            <img
            src={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
              id +
              ".png"
            }
            alt={name}
          />
          <p id="name"><b>#{id}</b> {name.charAt(0).toUpperCase() + name.slice(1)}</p>
        </div>
      </Link>
    </td>
  );
}
export default PokeCard;
