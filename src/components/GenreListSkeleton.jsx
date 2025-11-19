import { Skeleton } from "@/components/ui/skeleton";
export function GenreListSkeleton() {
	return (
		<div className="bg-stone-700 rounded-xl px-4 p-2 m-2">
			<div className="flex items-center">
				<Skeleton className="h-8 w-8 rounded-xl mr-2 bg-[#222222]" />
				<Skeleton className="h-5 w-[170px] bg-[#222222]" />
			</div>
		</div>
	);
}
