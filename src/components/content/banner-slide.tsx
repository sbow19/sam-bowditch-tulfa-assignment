import styles from '../../styles/main.module.css';
import { motion } from 'framer-motion' 


const BannerSlide: React.FC = ({fontSize, isScrollStopped}) => {
	return (
		<div className={styles['app-grid-container']}>
			<div className={styles['banner-video-container']}>
				<video className={styles['banner-frame']} muted autoPlay controls
					style={{
						position: isScrollStopped ? "relative" : "fixed"
					}}
				>
					<source src="../Tulfa Test/Banner Video/aerial-video-of-the-sunrise-in-the-dolomites-mount-2023-11-27-05-26-37-utc.mp4" type="video/mp4" />
                </video>
			</div>
			<motion.h2 
			key="introducing title"
				className={styles['introducing-title']}
				style={{
					fontSize: isScrollStopped ? "160px" : fontSize,
					position: isScrollStopped ? "relative" : "fixed"
				}}
			>Introducing
			</motion.h2>
		</div>
	);
};

export default BannerSlide;
