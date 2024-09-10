//Modules
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import Home from "../components/Home";
import Game from "../components/Game";
import LeaderBoard from "../components/LeaderBoard";
import Rules from "../components/Rules";
import About from "../components/About";

export default (
	<Router>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/game" element={<Game />} />
			<Route path="/leaderboard" element={<LeaderBoard />} />
			<Route path="/rules" element={<Rules />} />
			<Route path="/about" element={<About />} />
		</Routes>
	</Router>
);
