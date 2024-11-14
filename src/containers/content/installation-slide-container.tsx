import InstallationSlide from '../../components/content/installation-slide';
import LazyComponentWrapper from '../../shared/lazy-loading-component-wrapper';
import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import useAutoScroll from '../../custom-hooks/use-autoscroll';
import memoizeImageArray from '../../utils/memoize-images';
import styles from '../../styles/main.module.css';


const InstallationSlideContainer = ({ handleSlideLoad }) => {
	// usememo to avoid unnecessary re renders of image components
	const imageArray = useMemo(() => {
		const memoizedImages = memoizeImageArray([
			'../Tulfa Test/Installation/happy-couple-carrying-furniture-into-their-new-apa-2023-11-27-05-33-12-utc.jpg',
			'../Tulfa Test/Installation/male-carpenter-making-wooden-designer-furniture-fo-2023-11-27-05-07-47-utc.jpg',
			'../Tulfa Test/Installation/male-carpenter-making-wooden-designer-furniture-fo-2023-11-27-05-12-13-utc.jpg',
			'../Tulfa Test/Installation/male-carpenter-making-wooden-designer-furniture-fo-2023-11-27-05-12-45-utc.jpg',
			'../Tulfa Test/Installation/male-carpenter-making-wooden-designer-furniture-fo-2023-11-27-05-12-45-utc.jpg',
			'../Tulfa Test/Installation/closeup-professional-carpenter-hold-electric-circu-2024-01-04-21-15-19-utc.jpg',
		], styles['installation-image']);

		return memoizedImages;
	}, []);
	//Index of image array
	const [currentSlide, setCurrentSlide] = useState(0);

	const slideArrayLength = imageArray.length - 1;
	//Function to handle slide change
	const handleNextSlide = useCallback(() => {
		setCurrentSlide((prevSlide) => {
			if (prevSlide + 1 > slideArrayLength) {
				return 0;
			} else {
				return prevSlide + 1;
			}
		});
	}, []);

	const handlePrevSlide = useCallback(() => {
		setCurrentSlide((prevSlide) => {
			if (prevSlide - 1 < 0) {
				return slideArrayLength;
			} else {
				return prevSlide - 1;
			}
		});
	}, []);

	// Tracks when user scrolls into view
	const containerRef = useAutoScroll(10, handleSlideLoad);

	return (
		<div>
			<LazyComponentWrapper>
				<motion.div ref={containerRef}>
					<InstallationSlide
						nextSlide={handleNextSlide}
						prevSlide={handlePrevSlide}
						currentSlide={currentSlide}
						imageSet={imageArray}
					/>
				</motion.div>
			</LazyComponentWrapper>
		</div>
	);
};

export default InstallationSlideContainer;
