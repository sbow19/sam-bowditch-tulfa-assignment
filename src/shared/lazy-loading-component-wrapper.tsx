import { memo } from 'react';

/**
 * LazyComponentWrapper is a wrapper component to 
 * prevent unnecessary re-renders.
*/

const LazyComponentWrapper: React.NamedExoticComponent = memo(({children}) => {
	return <>{children}</>;
});

export default LazyComponentWrapper;
