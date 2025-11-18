import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

export default function GamesGrid() {
	const { data, error, isLoading } = useGames();
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	return (
		<>
			<p>{error}</p>
			<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-10">
				{isLoading &&
					skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
				{data.map((game) => (
					<GameCard
						key={game.id}
						game={game}
					/>
				))}
			</div>
		</>
	);
}
