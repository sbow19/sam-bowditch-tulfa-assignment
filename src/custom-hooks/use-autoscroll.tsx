import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';

/**
 * Hook checks when component is in view, then automatically scrolls to top of component at a given threshold
 * Container component with hook also calls the rendering of the next slide, if index is valid
 * @param {number} index -- index of next slide in slide array (See App component)
 * @param nextSlideLoad -- Handler function at App component level to load next slide
 * @returns {React.MutableRefObject<null>} Reference passed to component against which in view is checked
 */

const useAutoScroll = (index: number, nextSlideLoad) => {
	// Create a ref for the container element
	const containerRef = useRef(null);
	// Check if the container is in the viewport when it becomes visible
	const isInView = useInView(containerRef, { amount: 0.1 });

	// When the container is visible, call the nextSlideLoad with the current index
	useEffect(() => {
		if (isInView) {
			//Reference to handler function in main app. Manages load of next component
			if (index) {
				// Call nextSlideLoad if index is truthy
				nextSlideLoad(index);
			} else {
				// You can implement "pass" behavior here if needed
				// (e.g., simply do nothing or log something)
				console.log('No index provided, skipping...');
			}

			//Scroll to the top of the container
			containerRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	}, [isInView]); // Call only if component is in view

	return containerRef;
};

export default useAutoScroll;
