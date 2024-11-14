import styles from '../../styles/main.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { memo } from 'react'

const FabricSofaSlide: React.FC = memo(({
	currentSofaStyles,
	handleChangeSofa,
	choiceViewActive,
	handleShowChoice,
}) => {
	// Animation constants
	const dropIn = {
		initial: {
			y: '-25vh',
			opacity: 0,
		},
		visible: {
			
			opacity: 1, 
			y: '0',
			transition: {
				duration: 0.7, 
				ease: 'easeOut',
			},
		},
		hidden: {
			opacity: 0, 
			y: '-25vh',
			transition: {
				duration: 0.7, 
				ease: 'easeOut',
			},
		},
		exit: {
			opacity: 0,
			y: '-25vh',
			transition: {
				duration: 0.7, 
				ease: 'easeOut',
			},
		},
	};

	return (
		<div className={styles['sofa-colors-container']}>
			<div className={styles['left-side-fabric']}>
				<div className={styles['sofa-image-container']}>
					<div className={currentSofaStyles.brown} />
					<div className={currentSofaStyles.purple} />
					<div className={currentSofaStyles.olive} />
				</div>

				{/* Refactor using color button and passing in color argument */}
			</div>
			<div
				className={styles['right-side-fabric']}
				onMouseEnter={() => {
					handleShowChoice(true);
				}}
				onMouseLeave={() => {
					handleShowChoice(false);
				}}
			>
				<div className={styles['sofa-image-container']}>
					<div
						className={
							currentSofaStyles.current === 'print'
								? `${styles['right-side-print']} ${styles['current-color']}`
								: styles['right-side-print']
						}
					/>
					<div
						className={
							currentSofaStyles.current === 'leather'
								? `${styles['right-side-leather']} ${styles['current-color']}`
								: styles['right-side-leather']
						}
					/>
					<div
						className={
							currentSofaStyles.current === 'embroidery'
								? `${styles['right-side-embroidery']} ${styles['current-color']}`
								: styles['right-side-embroidery']
						}
					/>
				</div>

				<AnimatePresence
					mode='wait'
					initial={true}
				>
					{/* Choice view */}
					{choiceViewActive && (
						<motion.div
							key='choice-view'
							onClick={(e) => e.stopPropagation()}
							variants={dropIn}
							initial='hidden'
							animate='visible'
							exit='exit'
							className={styles['fabric-choice-container']}
						>
							<div className={styles['fabric-buttons-container']}>
								<button
									className={styles['fabric-button']}
									onClick={() => handleChangeSofa('print')}
								>
                                    <p className={styles['fabric-option-name']}>
                                        Print
                                    </p>
                                    <div className={styles['print-fabric-button']}/>
                                </button>
								<button
									className={styles['fabric-button']}
									onClick={() => handleChangeSofa('leather')}
								>
                                    <p className={styles['fabric-option-name']}>
                                        Leather
                                    </p>
                                    <div className={styles['leather-fabric-button']}/>
                                </button>
								<button
									className={styles['fabric-button']}
									onClick={() => handleChangeSofa('embroidery')}
								>
                                    <p className={styles['fabric-option-name']}>
                                        Embroidery
                                    </p>
                                    <div className={styles['embroidery-fabric-button']}/>
                                   
                                    
                                </button>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
});

export default FabricSofaSlide;
