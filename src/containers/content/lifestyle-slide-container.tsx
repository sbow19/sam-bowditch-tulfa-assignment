import LifestyleSlide from '../../components/content/lifestyle-slide';
import LazyComponentWrapper from '../../shared/lazy-loading-component-wrapper';
import { useRef, useState } from 'react';
import {
	useScroll,
	useTransform,
	useMotionValueEvent,
	motion,
} from 'framer-motion';
import useAutoScroll from '../../custom-hooks/use-autoscroll';

const LifestyleSlideContainer = ({ handleSlideLoad }) => {

	/**
	 * Like the banner slide, there is an invisible container behind this component via which we track scroll progress,
	 * animating the elements in the component.
	 * 
	 * The styles animated are opacity of the title part of the container, and the x, y and scale value of the background
	 * image
	 */

	const containerRef = useAutoScroll(8, handleSlideLoad);

	// Scroll tracker ref
	const scrollRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: scrollRef,
	});

	// Scroll binding for image scaling
	const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
	const opacityScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
	const translateYScale = useTransform(scrollYProgress, [0, 1], [200, -50]);
	const translateXScale = useTransform(scrollYProgress, [0, 1], [-100, 0]);

	const containerStyle = {
		height: '120vh',
		position: 'absolute',
		width: '100vw',
		top: 0,
		zIndex: 100,
		opacity: 0,
	};

	const scrollStyle = {
		height: '2000px',
		overflowY: 'scroll',
		position: 'sticky',
		width: '100vw',
		top: 0,
		zIndex: 100,
		opacity: 0,
	};

	return (
		<div>
			<LazyComponentWrapper>
				<LifestyleSlide
					imageScale={imageScale}
					opacityScale={opacityScale}
					translateYScale={translateYScale}
					translateXScale={translateXScale}
				/>
				<motion.div
					ref={containerRef}
					style={containerStyle}
				/>
				<motion.div
					ref={scrollRef}
					style={scrollStyle}
				/>
			</LazyComponentWrapper>
		</div>
	);
};

export default LifestyleSlideContainer;
