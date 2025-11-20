const GameHeading = ({ gameQuery }) => {
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;

	return <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">{heading}</h1>;
};

export default GameHeading;
