import useGames from "@/hooks/useGames";

export default function GamesGrid() {
    const { games, error } = useGames();

	return (
		<>
			<p>{error}</p>
			<ul>
				{games.map((game) => (
					<li
						className="bg-emerald-700 rounded-2xl py-2 px-3 m-1"
						key={game.id}
					>
						{game.name}
					</li>
				))}
			</ul>
		</>
	);
}