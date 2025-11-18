import { Card, CardContent, CardHeader } from "@/components/ui/card";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

export default function GameCard({ game }) {
	return (
		<Card className="overflow-hidden p-0">
			<CardHeader className="p-0">
				<img src={game.background_image} />
			</CardHeader>
			<CardContent>
				<h2 className="text-2xl font-bold">{game.name}</h2>
				<div className="flex justify-between">
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</div>
			</CardContent>
		</Card>
	);
}
