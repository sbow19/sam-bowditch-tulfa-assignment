import FabricSofaSlide from '../../components/content/fabric-sofa-slide';
import styles from '../../styles/main.module.css';
import LazyComponentWrapper from '../../shared/lazy-loading-component-wrapper';
import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import useAutoScroll from '../../custom-hooks/use-autoscroll';


const FabricSofaSlideContainer = ({handleSlideLoad}) => {


	/**
	 * Function has a dynamically displayed selection box which sets the opacity style of the currently
	 * selected image to 1, and the rest to 0. The selection box is displayed when the right portion
	 * of the screen is hovered over
	 */

    // Show fabric choice view on hover
    const [ choiceViewActive, setChoiceViewActive ] = useState(false);

    const handleShowChoice = useCallback((active: boolean)=>{
        setChoiceViewActive(active);
    }, []);

	// Current sofa selected
	const [currentSofaStyles, setCurrentSofa] = useState({
		current: 'print',
		brown: `${styles['print-fabric']} ${styles['current-color']}`,
		olive: `${styles['leather-fabric']}`,
		purple: `${styles['embroidery-fabric']}`,
	});

	const handleChangeSofa = useCallback((sofaColor: string) => {
		switch (sofaColor) {
			case 'print':
				setCurrentSofa({
					brown: `${styles['print-fabric']} ${styles['current-color']}`,
					olive: `${styles['leather-fabric']}`,
					purple: `${styles['embroidery-fabric']}`,
					current: 'print',
				});
				return;

			case 'leather':
				setCurrentSofa({
					brown: `${styles['print-fabric']} `,
					olive: `${styles['leather-fabric']} ${styles['current-color']}`,
					purple: `${styles['embroidery-fabric']}`,
					current: 'leather',
				});
				return;
			case 'embroidery':
				setCurrentSofa({
					brown: `${styles['print-fabric']} `,
					olive: `${styles['leather-fabric']} `,
					purple: `${styles['embroidery-fabric']} ${styles['current-color']}`,
					current: 'embroidery',
				});
				return;
			default:
				return;
		}
	}, []);

	// Detect whenuser scrolls into range
	const containerRef = useAutoScroll(7, handleSlideLoad)

	return (
		<div>
		<LazyComponentWrapper>
			<motion.div ref={containerRef}>
			<FabricSofaSlide
				currentSofaStyles={currentSofaStyles}
				handleChangeSofa={handleChangeSofa}
                handleShowChoice={handleShowChoice}
                choiceViewActive={choiceViewActive}
			/>
			</motion.div>
		</LazyComponentWrapper>
		</div>
	);
};

export default FabricSofaSlideContainer;
