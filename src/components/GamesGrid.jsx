import { useEffect, useState } from "react";
import apiClient from "@/services/api-client";

export default function GamesGrid() {
	const [games, setGames] = useState([]);
	const [error, setError] = useState("");
	useEffect(() => {
		apiClient
			.get("/games")
			.then((res) => setGames(res.data.results))
			.catch((err) => setError(err.message));
	}, [games, error]);

	return (
        <>
        <p>{error}</p>
        <ul>
            {games.map( game =>  <li key={game.id}>{game.name}</li> )}
        </ul></>
    )
}
