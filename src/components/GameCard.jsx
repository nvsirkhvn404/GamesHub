import {
	Card,
	CardContent,
	CardHeader,
} from "@/components/ui/card";
import PlatformIconList from "./PlatformIconList";

export default function GameCard({ game }) {
	return (
		<Card  className="overflow-hidden p-0">
			<CardHeader className="p-0">
				<img src={game.background_image}/>
			</CardHeader>
			<CardContent>
				<h2 className="text-2xl font-bold">{game.name}</h2>
				<PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
			</CardContent>
		</Card>
	);
}
