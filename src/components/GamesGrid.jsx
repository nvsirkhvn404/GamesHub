import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";

export default function GamesGrid() {
    const { games, error } = useGames();

	return (
		<>
			<p>{error}</p>
			<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-10">
				{games.map((game) => (
					<GameCard
						className="bg-emerald-700 rounded-2xl py-2 px-3 m-1"
						key={game.id} game={game}
					/>
				))}
			</div>
		</>
	);
}