import React from "react";

import "./About.css";
import Navbar from "./Navbar";

function About() {
    return (
        <div className="about">
            <Navbar />
            <h1>Pokedex</h1>
                <p>This is my WEB2 assignment that uses PokeAPI to create a Pokedex.</p>
            <hr />
            <h2>Technologies used</h2>
                <ul>
                    <li>Create React App toolchain </li>
                    <li>States + Effect to fetch data from <a href="https://pokeapi.co/">PokeAPI</a></li>
                    <li>Router w/ params - navigation and individual Pokemon stats (and this page!)</li>
                </ul>
            <hr />
            <h2>Sources</h2>
                <p>Task: <a href="https://github.com/KasperKnop/WEB2/blob/main/08%20Assignment%202/README.md">KasperKnop @ Github</a></p>
                <p>Code: <a href="https://github.com/IB-315168/Pokedex">IB-315168 @ Github</a></p>
            <hr />
            <h2>Lighthouse report</h2>
                <img src="/Pokedex/lighthouse.png" alt="report"></img>
        </div>
    );
}

export default About;