import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";

export default function GameCardSkeleton() {
	return (
		<Card className="overflow-hidden h-[300px] p-0">
			<CardHeader className="p-0">
				<Skeleton className="h-[200px] w-full rounded-xl" />
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<Skeleton className="h-4 " />
					<Skeleton className="h-4" />
				</div>
			</CardContent>
		</Card>
	);
}
