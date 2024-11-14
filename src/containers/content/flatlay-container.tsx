import FlatlaySlide from '../../components/content/flatlay-slide';
import LazyComponentWrapper from '../../shared/lazy-loading-component-wrapper';
import { motion } from 'framer-motion';
import useAutoScroll from '../../custom-hooks/use-autoscroll';

const FlatlaySlideContainer = () => {
	const containerRef = useAutoScroll(null, null);
	return (
		<div>
			<LazyComponentWrapper>
				<motion.div ref={containerRef}>
					<FlatlaySlide />
				</motion.div>
			</LazyComponentWrapper>
		</div>
	);
};

export default FlatlaySlideContainer;
