import React, { useEffect, useState } from "react";
import "./App.css";
import PokeCard from "./PokeCard";
import Navbar from "./Navbar";

function App() {
  const [pokeData, setData] = useState([]);
  const [offset, setOffset] = useState(0);

  const getData = (offset) => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset="+offset)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.results);
      });
  };

  useEffect(() => {
    getData(offset);
  }, [offset]);

  return (
    <div className="App">
      <Navbar />
      {/* <nav>
                <Link to="/Pokedex">Home</Link>
                <Link to="/search">Search</Link>
                <Link to="/about">About</Link>
      </nav> */}

      <h1>Pokedex</h1>
      <button onClick={() => {if(offset > 19) setOffset(offset - 20);}}>Prev</button>
      <input type="number" value={offset} onChange={(e) => {if(e.target.value >= 0 && e.target.value <= 1261) setOffset(e.target.value)}}></input>
      <button onClick={() => {if(offset < 1261) setOffset(offset + 20); }}>Next</button>
      <table className="pokedex-wrapper">
        <tbody >
          <tr className="pokedex">
            {pokeData.length > 0 &&
              pokeData.map((poke) => (
                <PokeCard
                  key={parseInt(poke.url.match(/\/(\d+)\/$/)[1])}
                  id={parseInt(poke.url.match(/\/(\d+)\/$/)[1])}
                  pokemon={poke}
                />
              ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
