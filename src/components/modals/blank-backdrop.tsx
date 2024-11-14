import styles from '../../styles/main.module.css';
import { motion } from 'framer-motion';

const BlankBackdrop = ({ children, onClick }) => {
	return(<motion.div
		className={styles['blank-backdrop']}
		onClick={onClick}
	>
		{children}
	</motion.div>);
};

export default BlankBackdrop;
