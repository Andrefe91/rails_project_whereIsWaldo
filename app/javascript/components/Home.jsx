import React from "react";
import { Link } from "react-router-dom";

export default function Home () {
    let imageId = 2;

    return (
        <>
            <div>Hello from Home component</div>

            <Link to="/game">Start Game</Link> <br />
            <Link to="/leaderboard">Leader-Board</Link> <br />
            <Link to="/rules">Rules</Link> <br />
            <Link to="/about">About</Link>

            <img src={`/images/scenarios/normal_${imageId}.jpg`} alt="Normal 1" />

        </>
    )
}
