import styles from '../../styles/main.module.css';
import BlankBackdrop from './blank-backdrop';
import { motion } from 'framer-motion';
import { useState } from 'react';

const SiloModal = ({ handleClose, modalOpen, children, ImageElements }) => {
	// Animations based on state
	const dropIn = {
		hidden: {
			y: '100vh',
		},
		visible: {
			y: '0',
			transition: {
				duration: 1, // Duration of the animation (in seconds)
				ease: 'easeOut', // Easing function for smooth deceleration
			},
		},
		exit: {
			y: '100vh',
			transition: {
				duration: 1, // Duration of the animation (in seconds)
				ease: 'easeOut', // Easing function for smooth deceleration
			},
		},
	};

	const [displacementValue, setDisplacementValue] = useState(0);

	const translateRight = () => {
		setDisplacementValue((prev) => prev + 300);
	};

	const translateLeft = () => {
		setDisplacementValue((prev) => prev - 300);
	};

	return (
		<BlankBackdrop onClick={handleClose}>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				variants={dropIn}
				initial='hidden'
				animate='visible'
				exit='exit'
				className={styles['silo-modal']}
			>
				<div className={styles['modal-card']}>
					<button
						onClick={handleClose}
						className={styles['modal-close']}
					>
						x
					</button>

					<div className={styles['silo-text-container']}>
						<p className={styles['silo-text']}>
							Ultra-high-definition images of your furniture shot from different
							angles.
						</p>
					</div>
					<div className={styles['silo-carousel-container']}>
						<button
							className={styles['invisi-button-left']}
							onClick={translateRight}
						/>

						{ImageElements.map((Element, index) => {
							index = index + 1;
							return (
								<motion.div
									key={index}
									className={styles[`carousel-image-container-${index}`]}
									style={{
                                        transform: `translateX(${displacementValue}px)`,
										transition: 'ease-in-out 0.5s'
                                    }}
								>
									{Element}
								</motion.div>
							);
						})}
						<button
							className={styles['invisi-button-right']}
							onClick={translateLeft}
						/>
					</div>
				</div>
			</motion.div>
		</BlankBackdrop>
	);
};

export default SiloModal;
