import { useState } from "react";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import Header from "./components/Header";
import PlatformSelector from "./components/PlatformSelector";

export default function App() {
	const [selectedGenre, setSelectedGenre] = useState(null);
	const [selectedPlatform, setSelectedPlatform] = useState(null);

	return (
		<>
			<Header />
			<div className="flex">
				<GenreList
					selectedGenre={selectedGenre}
					onSelectGenre={(genre) => setSelectedGenre(genre)}
				/>
				<div className="flex-1 flex flex-col p-10 gap-4">
					<div>
						<PlatformSelector
							selectedPlatform={selectedPlatform}
							onSelectPlatform={(platform) => setSelectedPlatform(platform)}
						/>
					</div>
					<GamesGrid
						selectedPlatform={selectedPlatform}
						selectedGenre={selectedGenre}
					/>
				</div>
			</div>
		</>
	);
}
