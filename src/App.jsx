import { useState } from "react";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import Header from "./components/Header";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export default function App() {
	const [gameQuery, setGameQuery] = useState({});

	return (
		<>
			<Header onSearch={(searchText) => setGameQuery({...gameQuery, searchText}) } />
			<div className="flex">
				<GenreList
					selectedGenre={gameQuery.genre}
					onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
				/>
				<div className="flex-1 flex flex-col p-10 gap-4">
					<GameHeading gameQuery={gameQuery} />
					<div className="flex gap-4">
						<PlatformSelector
							selectedPlatform={gameQuery.platform}
							onSelectPlatform={(platform) =>
								setGameQuery({ ...gameQuery, platform })
							}
						/>
						<SortSelector sortOrder={gameQuery.sortOrder}
							onSelectSortOrder={(sortOrder) =>
								setGameQuery({ ...gameQuery, sortOrder })
							}
						/>
					</div>
					<GamesGrid gameQuery={gameQuery} />
				</div>
			</div>
		</>
	);
}
