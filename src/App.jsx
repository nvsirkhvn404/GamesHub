import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";

export default function App() {
	return (
		<div className="flex">
			<GenreList />
			<GamesGrid />
		</div>
	);
}
