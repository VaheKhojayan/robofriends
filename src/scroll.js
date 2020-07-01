import React from 'react';

const Scroll = (pr) => {
	return (
         <div style={{overflow: 'scroll', border: '0px solid black', height: '500px'}}>
           {pr.children};
         </div>
		)
}

export default Scroll;