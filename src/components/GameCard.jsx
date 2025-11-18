import { Card, CardContent, CardHeader } from "@/components/ui/card";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

export default function GameCard({ game }) {
	return (
		<Card className="overflow-hidden p-0 gap-1 pb-4">
			<CardHeader className="p-0">
				<img src={getCroppedImageUrl(game.background_image)} />
			</CardHeader>
			<CardContent>
				<h2 className="text-2xl font-bold">{game.name}</h2>
				<div className="flex justify-between gap-1">
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</div>
			</CardContent>
		</Card>
	);
}
