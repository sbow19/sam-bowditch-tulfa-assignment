import CloseUpShotsSlide from '../../components/content/close-up-shots-slide';
import LazyComponentWrapper from '../../shared/lazy-loading-component-wrapper';
import { useState, useCallback } from 'react';
import {
	motion,
} from 'framer-motion';
import useAutoScroll from '../../custom-hooks/use-autoscroll';

const CloseUpShotsSlideContainer = ({ handleSlideLoad }) => {
	
	// Modal toggle
	const [isModalActive, setIsModalActive] = useState(false);

	// Open and close modal calbacks
	const close = useCallback(() => setIsModalActive(false), []);
	const open = useCallback(() => setIsModalActive(true), []);
	
	// Detects when user  scrolls into element to autofocus
	const containerRef = useAutoScroll(9, handleSlideLoad)

	return (
		<div>
			<LazyComponentWrapper>
				<motion.div ref={containerRef}>
					<CloseUpShotsSlide
						isModalActive={isModalActive}
						handleModalClose={close}
						handleModalOpen={open}
					/>
				</motion.div>
			</LazyComponentWrapper>
		</div>
	);
};

export default CloseUpShotsSlideContainer;
