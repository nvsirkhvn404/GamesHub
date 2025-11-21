import { Skeleton } from "@/components/ui/skeleton";
export function GenreListSkeleton() {
	return (
		<div className="bg-card rounded-xl px-4 p-2">
			<div className="flex items-center">
				<Skeleton className="h-10 w-10 rounded-lg mr-2" />
				<Skeleton className="h-5 w-[182px]" />
			</div>
		</div>
	);
}
