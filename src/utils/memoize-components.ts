import React, {memo} from 'react'

/**
 * Function memoizes a list of components
 * 
 * @param {React.FC[]} componentArray - list of components to render
 * @returns {React.NamedExoticComponent<()=>JSX.Element>[]}
 */
const  memoizeComponents = (componentArray: React.FC[]): React.NamedExoticComponent<()=>JSX.Element>[]=>{

	const memoImageArray = [];

	for(let component of componentArray){
		const memoImage = memo(component)
		memoImageArray.push(memoImage);
	}

	return memoImageArray
}

export default memoizeComponents