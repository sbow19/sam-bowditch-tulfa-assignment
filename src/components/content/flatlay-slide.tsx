import styles from '../../styles/main.module.css';
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";



const FlatlaySlide: React.FC = ({currentSlide, nextSlide, prevSlide}) => {
	// Logic to work with scroll wheel
	return (
		<>
			<div className={styles['app-grid-container-extended']}>
				<div className={styles['close-up-shots-title-container']}>
					<h2 className={styles['close-up-shots-title']}>Lorem Ipsum</h2>
				</div>
				<div className={styles['flatlay-video']}>
                    <video autoPlay muted controls width='100%'>
                        <source src="../Tulfa Test/interior-design-moodboard-with-modern-living-room-2023-12-01-01-15-03-utc.mp4"/>
                    </video>
                </div>
				<div className={styles['close-up-shots-footer-container']}>
					<p className={styles['close-up-shots-footer']}>
                    Give your customers a clear view of how your furniture fits into their space 
                    with precise dimensions and scale indicators.
					</p>
				</div>
			</div>
	
		</>
	);
};

export default FlatlaySlide;