import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import usePlatforms from "@/hooks/usePlatforms";

export default function PlatformSelector({ selectedPlatform, onSelectPlatform }) {
    const { data, error } = usePlatforms();

	if (error) return null;

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">{selectedPlatform?.name || "Platforms"}</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="start">
				<DropdownMenuGroup>
                    {data.map((platform) => 
                        <DropdownMenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</DropdownMenuItem>
                    )}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
