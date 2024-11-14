import styles from '../../styles/main.module.css';
import { AnimatePresence } from 'framer-motion';
import CloseUpModal from '../modals/closeup-modal';
import  {memo} from 'react'

const CloseUpShotsSlide: React.FC = memo(({
	isModalActive,
	handleModalClose,
	handleModalOpen,
}) => {

	return (
		<>
			<div className={styles['app-grid-container-extended']}>
				<div className={styles['close-up-shots-title-container']}>
					<h2 className={styles['close-up-shots-title']}>Close Up Shots</h2>
				</div>
				<div className={styles['close-up-main-image']}>
					<button
						className={styles['close-up-shot-modal-toggle']}
						onClick={() => handleModalOpen(true)}
					>
						<p className={styles['close-up-prompt']}>Take a closer look</p>
						<div className={styles['close-up-bubble']}>x</div>
					</button>

					<AnimatePresence
						initial={false}
						mode='wait'
					>
						{isModalActive ? (
							<CloseUpModal
								modalOpen={isModalActive}
								handleClose={handleModalClose}
							/>
						) : null}
					</AnimatePresence>
				</div>
				<div className={styles['close-up-shots-footer-container']}>
					<p className={styles['close-up-shots-footer']}>
						Lorem ipsum dolor sit amet consectetur. Augue elementum morbi in ac.
						Leo eu elit nibh nunc vitae eget massa sed sed. Sit sed aliquam sit
						nulla eget.
					</p>
				</div>
			</div>
		</>
	);
});

export default CloseUpShotsSlide;
