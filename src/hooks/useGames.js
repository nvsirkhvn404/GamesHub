import useData from "./useData";

export default function useGames(gameQuery) {
	return useData(
		"/games",
		{
			params: {
				genres: gameQuery.genre?.id,
				platforms: gameQuery.platform?.id,
				ordering: gameQuery.sortOrder,
				search: gameQuery.searchText,
			},
		},
		[gameQuery]
	);
}
