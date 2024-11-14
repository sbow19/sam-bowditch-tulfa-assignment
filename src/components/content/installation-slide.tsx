import styles from '../../styles/main.module.css';
import { FiArrowDownCircle, FiArrowUpCircle } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useMemo, memo } from 'react'

const InstallationSlide: React.FC = memo(({
	currentSlide,
	nextSlide,
	prevSlide,
	imageSet,
}) => {

	const imageSetMemo = useMemo(()=>{
		return imageSet
	},[])

	const intallationImageDropIn = {
		initial: {
			opacity: 0,
            y: 0,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
                duration: 1, 
                ease: 'easeOut', 
            },
		},
		exit: {
			opacity: 0,
			y: '-100vh',
			transition: {
                duration: 2.5, 
                ease: 'easeOut', 
            },
		}
	}

	return (
		<>
			<div className={styles['app-grid-container-extended']}>
				<div className={styles['close-up-shots-title-container']}>
					<h2 className={styles['close-up-shots-title']}>Lorem Ipsum</h2>
				</div>
				<motion.div 
					className={styles['installation-main-image-container']}
				>
					{imageSetMemo.map((Element, index) => {
						return (
							<AnimatePresence
								key={`installation-image-${index}`}
							>
								<motion.div
									initial='initial'
									exit='exit'
									key={`installation-image-${index}`}
									className={styles['installation-image-container']}
									variants={intallationImageDropIn}
									animate={index === currentSlide ? 'visible' : 'hidden'}
								>
									<Element />
								</motion.div>
							</AnimatePresence>
						);
					})}

					<div className={styles['installation-arrows-container']}>
						<FiArrowUpCircle 
							className={styles['installation-arrow']} 
							onClick={nextSlide}
						/>
						<FiArrowDownCircle className={styles['installation-arrow']} 
							onClick={prevSlide}
						/>
					</div>
				</motion.div>

				<div className={styles['close-up-shots-footer-container']}>
					<p className={styles['close-up-shots-footer']}>
						Give your customers a clear view of how your furniture fits into
						their space with precise dimensions and scale indicators.
					</p>
				</div>
			</div>
		</>
	);
});

export default InstallationSlide;
