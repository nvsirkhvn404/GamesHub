import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import Header from "./components/Header";

export default function App() {
	return (
		<>
			<Header/>
			<div className="flex">
				<GenreList />
				<GamesGrid />
			</div>
		</>
	);
}
