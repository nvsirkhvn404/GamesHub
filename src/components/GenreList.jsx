import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { GenreListSkeleton } from "./GenreListSkeleton";
import { Button } from "./ui/button";

export default function GenreList({ onSelectGenre }) {
	const { data, isLoading, error } = useGenres();
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	if (error) return null;

	if (isLoading) return (
		<div className="bg-card border-t hidden sm:flex sm:flex-col p-3">
			{skeletons.map((skeleton) => (
				<GenreListSkeleton key={skeleton}/>
			))}
		</div>
	);

	return (
		<ul className="bg-card border-t hidden sm:flex sm:flex-col p-3">
			{data.map((genre) => (
				<li key={genre.id} className="bg-stone-700 rounded-xl px-4 p-2 m-2">
					<div className="flex items-center">
						<img
							src={getCroppedImageUrl(genre.image_background)}
							className="size-8 rounded-xl"
						/>
						<Button onClick={() => onSelectGenre(genre)} variant="link" className="font-bold">{genre.name}</Button>
					</div>
				</li>
			))}
		</ul>
	);
}
