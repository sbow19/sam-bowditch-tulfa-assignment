import styles from '../../styles/main.module.css';
import { motion } from 'framer-motion';

const BlurredBackdrop = ({ children, onClick }) => {
	return(<motion.div
		className={styles['blurred-backdrop']}
		onClick={onClick}
	>
		{children}
	</motion.div>);
};

export default BlurredBackdrop;
