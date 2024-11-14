import styles from '../../styles/main.module.css';
import BlurredBackdrop from './blurred-backdrop';
import { motion } from 'framer-motion';
import { useMemo, Suspense, memo} from 'react';
import memoizeImageArray from '../../utils/memoize-images';

const CloseUpModal = ({ handleClose }) => {
	// Animations based on state
	const dropIn = {
		hidden: {
			y: '200vh',
		},
		visible: {
			y: '0',
			transition: {
				duration: 1, 
				ease: 'easeOut', 
			},
		},
		exit: {
			y: '200vh',
			transition: {
				duration: 1,
				ease: 'easeOut',
			},
		},
	};

	const blurVariant = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 1.5,
				ease: 'easeOut',
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 1.5,
				ease: 'easeOut',
			},
		},
	};

	const imagesArray = useMemo(() => {

		const memoizedImageArray = memoizeImageArray([
			'../Tulfa Test/Close Up Shots/view-of-a-modern-lounge-room-2024-05-27-19-05-26-utc.jpg',
			'../Tulfa Test/Close Up Shots/view-of-a-modern-lounge-room-2023-11-28-03-19-28-utc.jpg',
			'../Tulfa Test/Close Up Shots/lounge-room-2024-01-22-18-27-58-utc.jpg',
			'../Tulfa Test/Close Up Shots/1.jpg',
			'../Tulfa Test/Close Up Shots/lounge-room-2024-01-22-18-27-58-utc (1).jpg',
			'../Tulfa Test/Close Up Shots/lounge-room-2024-01-22-18-27-58-utc (2).jpg',
			'../Tulfa Test/Close Up Shots/screw-for-furniture-assembly-close-up-2023-11-27-04-51-33-utc.jpg',
			'../Tulfa Test/Close Up Shots/stylish-chest-of-drawers-close-up-furniture-for-2024-01-18-18-28-52-utc.jpg',
			'../Tulfa Test/Close Up Shots/2.jpg'
		], styles["closeup-image"])
		return memoizedImageArray;
	}, []);

	return (
		<>
			<motion.div
				variants={blurVariant}
				initial='hidden'
				animate='visible'
				exit='exit'
			>
				<BlurredBackdrop onClick={handleClose} />
			</motion.div>

			<motion.div
				onClick={(e) => e.stopPropagation()}
				variants={dropIn}
				initial='hidden'
				animate='visible'
				exit='exit'
				className={styles['closeup-modal']}
			>
				<div className={styles['closeup-card']}>
					<button
						onClick={handleClose}
						className={styles['modal-close']}
					>
						x
					</button>

					<Suspense>
						<div className={styles['closeup-image-container']}>
							{imagesArray.map((Element, index) => {
								index = index + 1;
								return (
									<div
										key={index}
										className={styles[`closeup-image-wrapper-${index}`]}
									>
										<Element/>
									</div>
								);
							})}

							<div className={styles['closeup-card-title']}>
								Lorem ipsum dolor sit amet consectetur. Morbi id eget elementum
								ornare.
							</div>
						</div>
					</Suspense>
				</div>
			</motion.div>
		</>
	);
};

export default CloseUpModal;
