import BannerSlide from '../../components/content/banner-slide';
import LazyComponentWrapper from '../../shared/lazy-loading-component-wrapper';
import { useRef, useState } from 'react';
import {  useScroll, useTransform, useMotionValueEvent, motion } from 'framer-motion';

/**
 * Banner slide includes an invisible scrollable div. The scroll progress of this div maps
 * onto the size of the Introducing text, creating the zoom in/out effect
 * 
 * @note I was unable to produce the desired effect whereby user scroll cycles through the frames
 * of the video in a performant and clean way. I elected instead to start the video automatically.
 */

const BannerSlideContainer = ({handleSlideLoad})=> {
    // reference to target scroll element
    const scrollRef = useRef(null);
    const [isScrollStopped, setIsScrollStopped] = useState(false);

	// Track progress
	const { scrollYProgress } = useScroll({
        target: scrollRef
    });

	//Map scroll distance to size of introducing text
    const fontSize = useTransform(scrollYProgress, [0, 1], ["20000px", "160px"]);

    /**
     *   When scroll progress is complete, then we load next component and stop tracking progress for purposes of loading component.
     *   isScrollStopped also determines the styling of the invisible scrollable container div.
     *      
    */   
    useMotionValueEvent(scrollYProgress, "change", (latest)=>{
        if (latest >= 1 && !isScrollStopped) {
            handleSlideLoad(1);
            scrollRef.current.scrollIntoView({
                top:0
            })
            setIsScrollStopped(true);
        }
    })
    

	return (
		<LazyComponentWrapper>
            <motion.div  ref={scrollRef} style={{position: isScrollStopped ? 'relative':'absolute', height: isScrollStopped ? "100vh" : "3000px"}}>
                <BannerSlide fontSize={fontSize} isScrollStopped={isScrollStopped}/>
            </motion.div>
		</LazyComponentWrapper>
	);
};

export default BannerSlideContainer;
