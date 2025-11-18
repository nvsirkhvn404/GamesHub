import { Badge } from "@/components/ui/badge";

export default function CriticScore({ score }) {
	const color =
		score > 75 ? "bg-green-300" : score > 60 ? "bg-yellow-300" : "bg-red-300 text-white";

	return <Badge className={`${color} font-bold`}>{score}</Badge>;
}
