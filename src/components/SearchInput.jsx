import { SearchIcon } from "lucide-react";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";
import { useRef } from "react";

export default function SeacrhInput({ onSearch }) {
	const ref = useRef();
	return (
		<div className="grid w-full max-w-sm gap-6">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (ref.current) onSearch(ref.current.value);
				}}
			>
				<InputGroup>
					<InputGroupInput ref={ref} placeholder="Search games..." />
					<InputGroupAddon>
						<SearchIcon />
					</InputGroupAddon>
				</InputGroup>
			</form>
		</div>
	);
}
