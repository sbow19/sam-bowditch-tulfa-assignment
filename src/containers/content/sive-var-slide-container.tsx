import SizeVarSlide from '../../components/content/size-var-slide';
import LazyComponentWrapper from '../../shared/lazy-loading-component-wrapper';
import {
	motion
} from 'framer-motion';
import useAutoScroll from '../../custom-hooks/use-autoscroll';

const SizeVarSlideContainer = ({ handleSlideLoad }) => {

	/**
	 *  I used framer motion to animate the images to position themselves when the component
	 * 	comes into view
	 */

	// Auto scroll to top when user is in range
	const containerRef = useAutoScroll(5, handleSlideLoad);
	return (
		<div>
			<LazyComponentWrapper>
				<motion.div ref={containerRef}>
					<SizeVarSlide />
				</motion.div>
			</LazyComponentWrapper>
		</div>
	);
};

export default SizeVarSlideContainer;
