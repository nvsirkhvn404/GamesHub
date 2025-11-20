import { useState } from "react";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import Header from "./components/Header";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export default function App() {
	const [gameQuery, setGameQuery] = useState({});

	return (
		<>
			<Header />
			<div className="flex">
				<GenreList
					selectedGenre={gameQuery.genre}
					onSelectGenre={(genre) => setGameQuery( {...gameQuery, genre})}
				/>
				<div className="flex-1 flex flex-col p-10 gap-4">
					<div className="flex gap-4">
						<PlatformSelector
							selectedPlatform={gameQuery.platform}
							onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}
						/>
						<SortSelector />
					</div>
					<GamesGrid
						gameQuery={gameQuery}
					/>
				</div>
			</div>
		</>
	);
}
