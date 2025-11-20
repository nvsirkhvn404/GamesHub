import { useState } from "react";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import Header from "./components/Header";
import PlatformSelector from "./components/PlatformSelector";

export default function App() {
	const [selectedGenre, setselectedGenre] = useState(null);
	return (
		<>
			<Header />
			<div className="flex">
				<GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setselectedGenre(genre)}/>
				<div className="flex-1 flex flex-col p-10 gap-4">
					<div>
						<PlatformSelector />
					</div>
					<GamesGrid selectedGenre={selectedGenre} />
				</div>
			</div>
		</>
	);
}
