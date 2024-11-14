import { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';

import BannerSlideContainer from './containers/content/banner-slide-container';
import VirtualProductSlideContainer from './containers/content/virtual-product-slide-container';
import MainContentSlideContainer from './containers/content/main-content-slide-container';
import SiloSlideContainer from './containers/content/silo-slide-container';
import SizeVarSlideContainer from './containers/content/sive-var-slide-container';
import ColorSofaSlideContainer from './containers/content/color-sofa-slide-container';
import FabricSofaSlideContainer from './containers/content/fabric-sofa-slide-container';
import LifestyleSlideContainer from './containers/content/lifestyle-slide-container';
import CloseUpShotsSlideContainer from './containers/content/close-up-shots-container';
import InstallationSlideContainer from './containers/content/installation-slide-container';
import DimensionSlideContainer from './containers/content/dimensions-slide-container';
import FlatlaySlideContainer from './containers/content/flatlay-container';
import memoizeComponents from './utils/memoize-components';

const slideArray = [
	BannerSlideContainer,
	VirtualProductSlideContainer,
	MainContentSlideContainer,
	SiloSlideContainer,
	SizeVarSlideContainer,
	ColorSofaSlideContainer,
	FabricSofaSlideContainer,
	LifestyleSlideContainer,
	CloseUpShotsSlideContainer,
	InstallationSlideContainer,
	DimensionSlideContainer,
	FlatlaySlideContainer,
];

function App() {
	const memoizedSlides = useMemo(() => {
		return memoizeComponents(slideArray); // Custom function memoizes slides individually
	}, []);

	// Track slides rendered dynamically
	const [renderedSlidesIndexes, setRenderedSlidesIndexes] = useState([
		memoizedSlides[0],
	]);

	// Handler function to load next component slide given scroll threshold met
	const handleSlideLoad = useCallback((nextSlideIndex) => {
		setRenderedSlidesIndexes((prevSlides) => {
			/*
				Component provides next slide index. If index is lower than the most recently rendered component index, then do nothing
			*/
			if (prevSlides.length >= nextSlideIndex + 1) {
				return prevSlides;
			} else {
				return [...prevSlides, memoizedSlides[nextSlideIndex]];
			}
		});
	}, []);

	return (
		<div>
			{/* Map components which are loaded. animated in via motion element */}
			{renderedSlidesIndexes.map((SlideElement, index) => {
				return (
					<motion.div
						key={`main-slide-${index}`}
						initial={{ opacity: 0 }} // Initial state
						animate={{ opacity: 1 }} // Animated state
						transition={{ duration: 1, delay: 1 }} // Duration of animation
						style={{ position: 'relative' }}
					>
						<SlideElement
							key={`main-slide-${index}`} // Unique key for each slide component to ensure correct rendering order and avoid unnecessary re-renders.
							handleSlideLoad={handleSlideLoad}
						/>
					</motion.div>
				);
			})}
		</div>
	);
}

export default App;
