import React, { memo } from 'react';

/**
 * Function takes an array of image sources, a group style, and fallback image. Returns memoized image component array
 * @param {string[]} imageSourceArray -- Array of image sources
 * @param {string} groupStyle -- CSS style object applied to all images im array
 * @param {string} fallbackImage -- Image source as fallback in case of error
 * @return {React.NamedExoticComponent<()=>JSX.Element>[]}
 */

const memoizeImageArray = (
	imageSourceArray: string[],
	groupStyle = '',
	fallbackImage = '',
): React.NamedExoticComponent<() => JSX.Element>[] => {
	const newImageArray: React.NamedExoticComponent<() => JSX.Element>[] = [];

	for (const imageSource of imageSourceArray) {
		const memoizedImage = memo(() => {
			return (
				<img
					src={imageSource}
					className={groupStyle}
					onError={(e) => (e.target.src = fallbackImage)}
				/>
			);
		});
		newImageArray.push(memoizedImage);
	}
	return newImageArray;
};

export default memoizeImageArray;
