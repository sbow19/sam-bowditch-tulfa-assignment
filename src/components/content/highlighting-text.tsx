import { useEffect, useState, useRef } from 'react';
import styles from '../../styles/main.module.css';

const HighlighingTextGroup = ({ id, children }) => {

  const [isHighlighted, setIsHighlighted] = useState(false);
  const textGroupRef = useRef(null);

  // Create the IntersectionObserver to detect visibility changes
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHighlighted(true); // Add highlight when in view
          } else {
            setIsHighlighted(false); // Remove highlight when out of view
          }
        });
      },
      {
        threshold: 1, // Trigger when 50% of the element is visible
      }
    );

    const element = textGroupRef.current;
    if (element) {
      observer.observe(element);
    }

    // Cleanup observer when the component unmounts
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div
      ref={textGroupRef}
      className={`${styles['text-group']} ${isHighlighted ? styles['highlight'] : ''}`}
      id={id}
    >
      {children}
    </div>
  );
};

export default HighlighingTextGroup;
