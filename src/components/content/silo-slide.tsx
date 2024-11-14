import styles from '../../styles/main.module.css';
import { useRef, useEffect, useState, memo } from 'react';
import SiloModal from '../modals/silo-modal';
import { AnimatePresence, motion } from 'framer-motion';

const SiloSlide: React.FC = memo(({ImageElements}) => {

	// Toggle hover - prevent re renders
	const buttonRef = useRef(null);

	// Toggle modal overlay
	const [modalOpen, setModalOpen] = useState(false);

	const close = () => setModalOpen(false);
	const open = () => setModalOpen(true);

	const siloVariant = {
		hidden: {
			x: '-50px',
			y: '20px',
			opacity: 0
		},
		visible: {
			x: 0,
			y: 0,
		},
	};

	const wrapperVariant = {
		hidden: {
			y: '-20px',
		},
		visible: {
			y: 0,
		},
	};

	return (
		<div className={styles['app-grid-container']}>
			<motion.div
				className={styles['silo-title-button-wrapper']}
				animate={modalOpen ? 'hidden' : 'visible'}
				variants={wrapperVariant}
				transition={{ duration: 1, ease: 'easeOut' }}
				initial='visible'
			>
				<div className={styles['silo-title-container']}>
					<h3 className={styles['silo-title']}>Product Silos</h3>
				</div>
				<button
					ref={buttonRef}
					className={`${styles['silo-button']}`}
					onMouseEnter={() => {
						buttonRef.current.classList.add(`${styles['button-hovered']}`)
					}}
					onMouseLeave={() => {
						buttonRef.current.className = `${styles['silo-button']}`
						
					}}
					onClick={() => (modalOpen ? close() : open())}
				>
					<div className={`${styles['plus']} ${styles['button-text']}`}>+</div>
					<p className={styles['button-text']}>Take a closer look</p>
				</button>
			</motion.div>
			<motion.img
				className={styles['silo-main-image-container']}
				src='../../public/Tulfa Test/Silo Images/6367-beige-basket-isolated-on-a-transparent-backg-2023-11-27-04-51-12-utc.jpg'
				animate={modalOpen ? 'hidden' : 'visible'}
				variants={siloVariant}
				transition={{ duration: 1, ease: 'easeOut' }}
				initial='visible'
				loading='lazy'
				
			/>

			<AnimatePresence
				initial={false}
				mode='wait'
			>
				{modalOpen ? (
					<SiloModal
						modalOpen={modalOpen}
						handleClose={close}
						ImageElements={ImageElements}
					/>
				) : null}
			</AnimatePresence>
		</div>
	);
});

export default SiloSlide;
