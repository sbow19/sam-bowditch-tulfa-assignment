import styles from '../../styles/main.module.css';
import { useEffect, memo } from 'react';
import HighlighingTextGroup from './highlighting-text';

const MainContentSlide: React.FC = memo(() => {

	useEffect(() => {
		// Select all the text groups
		const textGroups = document.querySelectorAll('.text-group');

		// Create an intersection observer
		const observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					// When a text group enters the viewport, add 'highlight' class
					if (entry.isIntersecting) {
						entry.target.classList.add('highlight');
					} else {
						entry.target.classList.remove('highlight');
					}
				});
			},
			{
				threshold: 0.5, // 50% of the text group must be in the viewport to trigger
			},
		);

		// Observe each text group
		textGroups.forEach((group) => {
			observer.observe(group);
		});

        return 
	});

	return (
		<div className={styles['custom-grid-container']}>
            <HighlighingTextGroup id={1}>
                Lorem ipsum dolor, sit amet.
            </HighlighingTextGroup>
            <HighlighingTextGroup id={2}>
                Quo odit atque ut architext
            </HighlighingTextGroup>
            <HighlighingTextGroup id={3}>
                obcaecati rem vitae tempore none 
            </HighlighingTextGroup>
            <HighlighingTextGroup id={4}>
                asperiores conseqatur ut architexto
            </HighlighingTextGroup>
			<HighlighingTextGroup id={5}>
			doloribus eos laborum preasentium!
            </HighlighingTextGroup>
		</div>
	);
});

export default MainContentSlide;
