import { Card, CardContent, CardHeader } from "@/components/ui/card";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

export default function GameCard({ game }) {
	return (
		<Card className="overflow-hidden pt-0 pb-4 gap-1">
			<CardHeader className="p-0">
				<img src={getCroppedImageUrl(game.background_image)} />
			</CardHeader>
			<CardContent className="px-4">
				<div className="flex justify-between gap-1 flex-wrap">
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
					
				</div>
				<h2 className="text-2xl lg:text-xl font-bold">{game.name}</h2>
			</CardContent>
		</Card>
	);
}
