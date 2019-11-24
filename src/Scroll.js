import React from 'react';

const Scroll = (props) => {
	return (
		//double {{}}: outside: it's javascript; inside: it's an object which can have styles 
		<div style={{ overflow: 'Scroll', border: '2px solid white', height: '800px'}}>
			{props.children}		
		</div>

	)
}

export default Scroll;