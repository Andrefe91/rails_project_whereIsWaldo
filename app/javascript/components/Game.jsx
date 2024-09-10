import React from "react";
import { Link } from "react-router-dom";

export default function Game() {
    return (
        <>
            <div>Hello from Game component</div>
            <Link to="/">Go back</Link>
        </>
    )
}
