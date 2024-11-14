import MainContentSlide from '../../components/content/main-content-slide';
import LazyComponentWrapper from '../../shared/lazy-loading-component-wrapper';
import { motion } from 'framer-motion';
import useAutoScroll from '../../custom-hooks/use-autoscroll';

const MainContentSlideContainer = ({ handleSlideLoad }) => {

	/**
	 * For this component, I created a sequence of elements with a portion of text,
	 * each with a text-group class. I  then applied an observer which triggers
	 * when the text is fully in the viewport, triggering a brightness change.
	 */

	const containerRef = useAutoScroll(3, handleSlideLoad);
	return (
		<div>
			<LazyComponentWrapper>
				<motion.div ref={containerRef}>
					<MainContentSlide />
				</motion.div>
			</LazyComponentWrapper>
		</div>
	);
};

export default MainContentSlideContainer;
