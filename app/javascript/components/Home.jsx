import React from "react";
import { Link } from "react-router-dom";

export default function Home () {
    return (
        <>
            <div>Hello from Home component</div>

            <Link to="/game">Start Game</Link> <br />
            <Link to="/leaderboard">Leader-Board</Link> <br />
            <Link to="/rules">Rules</Link> <br />
            <Link to="/about">About</Link>
        </>
    )
}
