import { SearchIcon } from "lucide-react";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";

export default function SeacrhInput() {
	return (
		<div className="grid w-full max-w-sm gap-6">
			<InputGroup>
				<InputGroupInput placeholder="Search games..." />
				<InputGroupAddon>
					<SearchIcon />
				</InputGroupAddon>
			</InputGroup>
		</div>
	);
}
