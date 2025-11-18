import useGenres from "@/hooks/useGenres";

export default function GenreList(){
    const { genres } = useGenres();
    return (
        <ul className="bg-lime-500">
            {genres.map((genre) => 
                (<li key={genre.id}>{genre.name}</li>)
            )}
        </ul>
    );
}