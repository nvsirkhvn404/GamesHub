import {
	Card,
	CardContent,
	CardHeader,
} from "@/components/ui/card";

export default function GameCard({ game }) {
	return (
		<Card  className="overflow-hidden p-0">
			<CardHeader className="p-0">
				<img src={game.background_image}/>
			</CardHeader>
			<CardContent>
				<h2>{game.name}</h2>
			</CardContent>
		</Card>
	);
}
