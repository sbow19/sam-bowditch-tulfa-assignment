import ColorSofaSlide from '../../components/content/color-sofa-slide';
import styles from '../../styles/main.module.css';
import LazyComponentWrapper from '../../shared/lazy-loading-component-wrapper';
import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import useAutoScroll from '../../custom-hooks/use-autoscroll';

const ColorSofaSlideContainer = ({ handleSlideLoad }) => {
	/**
	 *  Component has buttons which dynamically sets the opacity of the images on the page via the handleChangeSofa function
	 */

	// Current sofa selected
	const [currentSofaStyles, setCurrentSofa] = useState({
		current: 'brown',
		brown: `${styles['brown-sofa']} ${styles['current-color']}`,
		olive: `${styles['olive-sofa']}`,
		purple: `${styles['purple-sofa']}`,
	});

	const handleChangeSofa = useCallback((sofaColor: string) => {
		switch (sofaColor) {
			case 'brown':
				setCurrentSofa({
					brown: `${styles['brown-sofa']} ${styles['current-color']}`,
					olive: `${styles['olive-sofa']}`,
					purple: `${styles['purple-sofa']}`,
					current: 'brown',
				});
				return;

			case 'olive':
				setCurrentSofa({
					brown: `${styles['brown-sofa']} `,
					olive: `${styles['olive-sofa']} ${styles['current-color']}`,
					purple: `${styles['purple-sofa']}`,
					current: 'olive',
				});
				return;
			case 'purple':
				setCurrentSofa({
					brown: `${styles['brown-sofa']} `,
					olive: `${styles['olive-sofa']} `,
					purple: `${styles['purple-sofa']} ${styles['current-color']}`,
					current: 'purple',
				});
				return;
			default:
				return;
		}
	}, []);

	// Detect whenuser scrolls into range
	const containerRef = useAutoScroll(6, handleSlideLoad);

	return (
		<div>
			<LazyComponentWrapper>
				<motion.div ref={containerRef}>
					<ColorSofaSlide
						currentSofaStyles={currentSofaStyles}
						handleChangeSofa={handleChangeSofa}
					/>
				</motion.div>
			</LazyComponentWrapper>
		</div>
	);
};

export default ColorSofaSlideContainer;
