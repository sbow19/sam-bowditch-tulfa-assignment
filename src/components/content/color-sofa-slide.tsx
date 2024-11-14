import styles from '../../styles/main.module.css';
import { memo } from 'react'

const ColorSofaSlide: React.FC = memo(({ currentSofaStyles, handleChangeSofa }) => {

	return (
		<div className={styles['sofa-colors-container']}>
			<div className={styles['left-side']}>
				<div className={styles['sofa-image-container']}>
					<div className={currentSofaStyles.brown} />
					<div className={currentSofaStyles.purple} />
					<div className={currentSofaStyles.olive} />
				</div>

				{/* Refactor using color button and passing in color argument */}
				<div className={styles['color-buttons-container']}>
					<button
						className={styles['color-button']}
						onClick={() => handleChangeSofa('brown')}
					>
						<div className={styles['color-button-top-brown']} />
						<div className={styles['color-button-bottom-brown']} />
					</button>
					<button
						className={styles['color-button']}
						onClick={() => handleChangeSofa('purple')}
					>
						<div className={styles['color-button-top-purple']} />
						<div className={styles['color-button-bottom-purple']} />
					</button>
					<button
						className={styles['color-button']}
						onClick={() => handleChangeSofa('olive')}
					>
						<div className={styles['color-button-top-olive']} />
						<div className={styles['color-button-bottom-olive']} />
					</button>
				</div>
			</div>
			<div className={styles['right-side']}>
				<div className={styles['sofa-image-container']}>
					<div
						className={
							currentSofaStyles.current === 'brown'
								? `${styles['right-side-brown']} ${styles['current-color']}`
								: styles['right-side-brown']
						}
					/>
					<div
						className={
							currentSofaStyles.current === 'purple'
								? `${styles['right-side-purple']} ${styles['current-color']}`
								: styles['right-side-purple']
						}
					/>
					<div
						className={
							currentSofaStyles.current === 'olive'
								? `${styles['right-side-olive']} ${styles['current-color']}`
								: styles['right-side-olive']
						}
					/>
				</div>
			</div>
		</div>
	);
});

export default ColorSofaSlide;
