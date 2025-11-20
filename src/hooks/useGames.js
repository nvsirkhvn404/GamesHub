import useData from "./useData";

export default function useGames(selectedGenre, selectedPlatform) {
	return useData(
		"/games",
		{
			params: {
				genres: selectedGenre?.id,
				platforms: selectedPlatform?.id,
			},
		},
		[selectedGenre?.id, selectedPlatform?.id]
	);
}
