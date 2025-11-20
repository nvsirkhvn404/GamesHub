import { useState } from "react";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import Header from "./components/Header";

export default function App() {
	const [selectedGenre, setselectedGenre] = useState(null);
	return (
		<>
			<Header />
			<div className="flex">
				<GenreList onSelectGenre={(genre) => setselectedGenre(genre)}/>
				<div className="flex-1">
					<GamesGrid selectedGenre={selectedGenre} />
				</div>
			</div>
		</>
	);
}
