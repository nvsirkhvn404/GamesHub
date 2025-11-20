import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { GenreListSkeleton } from "./GenreListSkeleton";
import { Button } from "./ui/button";

export default function GenreList({ selectedGenre, onSelectGenre }) {
	const { data, isLoading, error } = useGenres();
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	if (error) return null;

	if (isLoading)
		return (
			<div className="bg-card border-t hidden sm:flex sm:flex-col p-3">
				{skeletons.map((skeleton) => (
					<GenreListSkeleton key={skeleton} />
				))}
			</div>
		);

	return (
		<div className="hidden sm:flex flex-col bg-card border-r-2">
			<h2 className="text-2xl sm:text-3xl md:text-4xl m-4 font-bold ">
				Genres
			</h2>
			<ul className="space-y-4 mx-4">
				{data.map((genre) => (
					<li
						key={genre.id}
						className={
							genre.id === selectedGenre?.id
								? "bg-[#e5e5e5] rounded-xl px-4 py-2"
								: "bg-stone-700 rounded-xl px-4 p-2"
						}
					>
						<div className="flex items-center">
							<img
								src={getCroppedImageUrl(genre.image_background)}
								className="size-10 rounded-lg object-cover"
							/>
							<Button
								onClick={() => onSelectGenre(genre)}
								variant="link"
								className={
									genre.id === selectedGenre?.id
										? "font-bold text-stone-700 text-lg"
										: "font-bold"
								}
							>
								{genre.name}
							</Button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
