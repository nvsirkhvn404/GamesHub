import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import bullsEye from "../assets/bulls-eye.webp";

const Emoji = ({ rating }) => {
	const numericRating = Number(rating);

	if (numericRating < 3) return null;

	const emojiMap = {
		3: { src: meh, alt: "meh" },
		4: { src: thumbsUp, alt: "recommended" },
		5: { src: bullsEye, alt: "exceptional" },
	};

	const emoji = emojiMap[numericRating];
	if (!emoji) return null;

	return <img {...emoji} className="size-8 mt-1" />;
};

export default Emoji;
