import { Badge } from "@/components/ui/badge";

export default function CriticScore({ score }) {
	const color =
		score > 75 ? "bg-green-400" : score > 60 ? "bg-yellow-400" : "bg-red-400";

	return <Badge className={`${color} font-bold`}>{score}</Badge>;
}
