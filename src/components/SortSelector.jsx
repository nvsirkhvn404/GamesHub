import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SortSelector = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">
					Order by: Relevance
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="start">
				<DropdownMenuGroup>
					<DropdownMenuItem>Relevance</DropdownMenuItem>
					<DropdownMenuItem>Date added</DropdownMenuItem>
					<DropdownMenuItem>Name</DropdownMenuItem>
					<DropdownMenuItem>Release date</DropdownMenuItem>
					<DropdownMenuItem>Popularity</DropdownMenuItem>
					<DropdownMenuItem>Average rating</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default SortSelector;
