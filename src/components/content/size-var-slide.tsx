import styles from '../../styles/main.module.css';
import { motion } from 'framer-motion';
import {memo} from 'react';

const SizeVarSlide: React.FC = memo(() => {
	
	const sizeVariants = {
		initial: {
			opacity: 0,
			y: "50px"
		},
		visible: {
			opacity: 1,
			y: 0
		}
	}


	return (
		<div className={styles['app-grid-container']}>
			<div className={styles['size-var-slide-container']}>
				<div className={styles['size-images-container']}>
					{/* Large */}
					<motion.div

						variants={sizeVariants}
						initial='initial'
						whileInView="visible"
						transition={{ duration: 0.6, ease: "easeIn" }}
                        className={styles['large-item']}
						viewport={{ once: true }}
                    >
                        <p className={styles['size-tag']}>L</p>

                    </motion.div>

					{/* Medium */}
					<motion.div
						variants={sizeVariants}
						whileInView="visible"
						initial='initial'
						transition={{ duration: 0.6, ease: "easeIn", delay: 0.25 }}
                        className={styles['medium-item']}
						viewport={{ once: true }}
                    >

                        <p className={styles['size-tag']}>M</p>
                    </motion.div>

					{/* Small */}
					<motion.div
						variants={sizeVariants}
						whileInView="visible"
						initial='initial'
						transition={{ duration: 0.6, ease: "easeIn", delay: 0.5, }}
                        className={styles['small-item']}
						viewport={{ once: true }}
                    >
                        <p className={styles['size-tag']}>S</p>

                    </motion.div>
				</div>

				<p className={styles['slide-var-footer']}>Lorem ipsum dolor sim amet</p>
			</div>
		</div>
	);
});

export default SizeVarSlide;
