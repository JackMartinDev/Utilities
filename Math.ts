//Return a whole number between two values. (min and max are inclusive)
export const randomNumberBetweenInclusive = (
	min: number,
	max: number
): number => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
};
