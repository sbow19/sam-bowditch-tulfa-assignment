import DimensionSlide from '../../components/content/dimension-slide';
import LazyComponentWrapper from '../../shared/lazy-loading-component-wrapper';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import useAutoScroll from '../../custom-hooks/use-autoscroll';
import memoizeImageArray from '../../utils/memoize-images';
import styles from '../../styles/main.module.css';

const DimensionSlideContainer = ({ handleSlideLoad }) => {
	// Avoid unnecessary re renders of image components
	const imageArray = useMemo(() => {
		const memoizedImages = memoizeImageArray(
			[
				'../Tulfa Test/Dimension/empty-space-on-minimal-beautiful-dining-table-in-m-2023-11-27-05-21-36-utc.jpg',
				'../Tulfa Test/Dimension/interior-design-of-neutral-living-room-2024-10-18-05-17-30-utc.jpg',
				'../Tulfa Test/Dimension/living-room-interior-with-dining-table-cupboard-s-2023-11-27-05-19-28-utc.jpg',
				'../Tulfa Test/Dimension/minimal-living-room-interior-design-2023-11-27-05-09-40-utc.jpg',
				'../Tulfa Test/Dimension/view-of-living-room-in-minimal-style-with-yellow-s-2023-11-27-05-26-51-utc.jpg',
				'../Tulfa Test/Dimension/wooden-furniture-in-minimal-dining-room-interior-d-2023-11-27-05-20-43-utc.jpg',
			],
			styles['dimension-image'],
			'../Tulfa Test/Dimension/empty-space-on-minimal-beautiful-dining-table-in-m-2023-11-27-05-21-36-utc.jpg',
		);
		return memoizedImages;
	}, []);

	//Index of image array
	const [currentSlide, setCurrentSlide] = useState(0);

	const slideArrayLength = imageArray.length - 1;
	//Function to handle slide change
	const handleNextSlide = () => {
		setCurrentSlide((prevSlide) => {
			if (prevSlide + 1 > slideArrayLength) {
				return 0;
			} else {
				return prevSlide + 1;
			}
		});
	};

	const handlePrevSlide = () => {
		setCurrentSlide((prevSlide) => {
			if (prevSlide - 1 < 0) {
				return slideArrayLength;
			} else {
				return prevSlide - 1;
			}
		});
	};

	// Automatically scrolls to top of page when user enters view
	const containerRef = useAutoScroll(11, handleSlideLoad);

	return (
		<div>
			<LazyComponentWrapper>
				<motion.div ref={containerRef}>
					<DimensionSlide
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

export default DimensionSlideContainer;
