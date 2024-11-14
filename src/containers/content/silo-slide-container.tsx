import SiloSlide from '../../components/content/silo-slide';
import styles from '../../styles/main.module.css';
import LazyComponentWrapper from '../../shared/lazy-loading-component-wrapper';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import useAutoScroll from '../../custom-hooks/use-autoscroll';

const SiloSlideContainer = ({ handleSlideLoad }) => {

	/**
	 *  I used framer motion to animate the elements in this component. When the take a look button is clicked,
	 * 	it triggers movement of the title components behind a modal. The modal contains a carousel of images.
	 * 	I placed two almost-transparent buttons at either side of the carousel, which triggers a displacement value to be
	 * 	set on each image in the carousel.
	 */
	const ImageElements = useMemo(() => {
		const firstImage = (
			<motion.img
				src='../../public/Tulfa Test/Silo Images/6367-beige-basket-isolated-on-a-transparent-backg-2023-11-27-04-51-12-utc.jpg'
				className={styles['first-carousel-image']}
			/>
		);
		const secondImage = (
			<motion.img
				src='../../public/Tulfa Test/Silo Images/6367-beige-basket-isolated-on-a-transparent-backg-2023-11-27-04-51-12-utc.jpg'
				className={styles['second-carousel-image']}
			/>
		);
		const thirdImage = (
			<motion.img
				src='../../public/Tulfa Test/Silo Images/6367-beige-basket-isolated-on-a-transparent-backg-2023-11-27-04-51-12-utc.jpg'
				className={styles['third-carousel-image']}
			/>
		);
		const fourthImage = (
			<motion.img
				src='../../public/Tulfa Test/Silo Images/6367-beige-basket-isolated-on-a-transparent-backg-2023-11-27-04-51-12-utc.jpg'
				className={styles['fourth-carousel-image']}
			/>
		);

		return [firstImage, secondImage, thirdImage, fourthImage];
	}, []);

	// Detect whenuser scrolls into range
	const containerRef = useAutoScroll(4, handleSlideLoad)
	return (
		<div>
			<LazyComponentWrapper>
				<motion.div ref={containerRef}>
					<SiloSlide ImageElements={ImageElements} />
				</motion.div>
			</LazyComponentWrapper>
		</div>
	);
};

export default SiloSlideContainer;
