import styles from '../../styles/main.module.css';
import { motion } from 'framer-motion';
import { memo } from 'react'

const LifestyleSlide: React.FC = memo(({
	opacityScale,
	imageScale,
	translateYScale,
	translateXScale
}) => {

	return (
		<div style={{
            position: 'sticky',
			top: 0,
            height: "120vh",
            width: "100vw",
			overflow: "hidden"
        }}>
			{/*Add motion to picture on scroll*/}
			<motion.div
				key='lifestyle-background'
				style={{
					scale: imageScale,
                    position: "absolute",
					translateY: translateYScale,
					translateX: translateXScale,
                    
				}}
				className={styles['lifestyle-scenes-image-container']}
			>
				
			</motion.div>
            <motion.div
					className={styles['lifestyle-scenes-overlay']}
					key='lifestyle-overlay'
					initial={{ opacity: 0 }}
					style={{
						opacity: opacityScale,
						position: "absolute",
					}}
				>
					<h2 className={styles['lifestyle-scenes-title']}>Lifestyle Scenes</h2>
				</motion.div>
		</div>
	);
});

export default LifestyleSlide;
