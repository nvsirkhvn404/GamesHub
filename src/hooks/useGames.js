import useData from "./useData";

export default function useGames(selectedGenre) {
	return useData(
		"/games",
		{
			params: {
				genres: selectedGenre?.id,
			},
		},
		[selectedGenre?.id,]
	);
}
