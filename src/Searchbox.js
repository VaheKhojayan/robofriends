import React from 'react';
/*import Cardlist from './cardlist';
import Searchbox from './Searchbox';
import {robots} from './robots';*/

const searchbox = ({searchfield,searchchange}) => {
	return (
		<div className='pa2'>
            <input 
            
            className='pa3 ba b--green bg-lightest-blue'
            type="searchbox" 
            placeholder="Search Robot"
            onChange={searchchange} />
		</div>
		)
}

export default searchbox;
