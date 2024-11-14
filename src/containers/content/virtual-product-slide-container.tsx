import VirtualProductSlide from '../../components/content/virtual-product-slide';
import LazyComponentWrapper from '../../shared/lazy-loading-component-wrapper';
import { motion } from 'framer-motion';
import useAutoScroll from '../../custom-hooks/use-autoscroll';

const VirtualProductSlideContainer = ({ handleSlideLoad }) => {

	/**
	 * This component lazy loads the chair image, and animates it.
	 * 
	 * To create the shifting colors effect of the title, I created a contaienr which several
	 * horizontal slices, each with a linear gradient applied. I then applied an animation to 
	 * continuously move the slide up and down. I also applied css styling to make the 
	 * title text transparent.
	 */

	const containerRef = useAutoScroll(2, handleSlideLoad);
	return (
		<div>
			<LazyComponentWrapper>
				<motion.div ref={containerRef}>
					<VirtualProductSlide />
				</motion.div>
			</LazyComponentWrapper>
		</div>
	);
};

export default VirtualProductSlideContainer;
