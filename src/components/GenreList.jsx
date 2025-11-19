import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";

export default function GenreList() {
	const { data } = useGenres();
	return (
		<ul className="bg-card border-t hidden sm:flex sm:flex-col p-3">
			{data.map((genre) => (
				<li
					key={genre.id}
					className="bg-stone-700 rounded-xl px-4 p-2 m-2"
				>
					<div className="flex items-center">
						<img
							src={getCroppedImageUrl(genre.image_background)}
							className="size-8 rounded-xl mr-2"
						/>
						{genre.name}
					</div>
				</li>
			))}
		</ul>
	);
}