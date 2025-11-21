import {
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaApple,
	FaLinux,
	FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendoswitch } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

const PlatformIconList = ({ platforms }) => {
	const iconMap = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: SiNintendoswitch,
		mac: FaApple,
		linux: FaLinux,
		android: FaAndroid,
		ios: MdPhoneIphone,
		web: BsGlobe,
	};

	return (
		<div className="flex gap-1.5 text-stone-500 my-2">
			{platforms.map((platform) => {
				const Icon = iconMap[platform.slug];
				if (!Icon) return null;
				return <Icon key={platform.id ?? platform.slug}/>;
			})}
		</div>
	);
}

export default PlatformIconList;