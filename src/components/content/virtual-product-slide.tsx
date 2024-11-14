import styles from '../../styles/main.module.css';
import { motion } from 'framer-motion';
import { memo } from 'react';

const VirtualProductSlide: React.FC = memo(() => {
	const variants = {
		hidden: {
			opacity: 0,
			y: 0, 				
		},
		visible: {
			opacity: 1,
			y: -150, 			
			transition: {
				duration: 1,
				delay: 3,		
			},
		},
	};

	return (
		<div className={styles['app-grid-container']}>
			<div className={styles['virtual-product-gradient-container']}>
				<div className={styles['virtual-product-gradient']}>
					<div className={styles['gradient-one']} />
					<div className={styles['gradient-two']} />
					<div className={styles['gradient-three']} />
					<div className={styles['gradient-four']} />
					<div className={styles['gradient-five']} />
					<div className={styles['gradient-six']} />
					<div className={styles['gradient-seven']} />
				</div>
				<h2 className={styles['virtual-product-title']}>
					Virtual Product Photography
				</h2>
			</div>

			<motion.img
				variants={variants}
				initial='hidden' // Initial state (hidden)
				whileInView='visible'
				className={styles['virtual-product-sofa-container']}
				src='../../public/Tulfa Test/Banner Video/modern-scandinavian-yellow-sofa-isolated-over-whit-2023-11-27-05-20-00-utc.jpg'
				loading='lazy'
			/>
		</div>
	);
});

export default VirtualProductSlide;
