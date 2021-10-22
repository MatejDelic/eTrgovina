import React from 'react';

const PreCart = ({ onRouteChange }) => {

	return (
		<div>
			<h1 className='f1'>Artikal je dodan u košaricu!</h1>
			<div>
				<button 
					onClick={() => onRouteChange('home')} 
					className='br3 pa3 ma2 ba b--black bg-transparent bg-light-green f3 grow pointer'>
					Nastavi kupnju
				</button>
				<button 
					onClick={() => onRouteChange('cart')} 
					className='br3 pa3 ma2 ba b--black bg-transparent bg-light-green f3 grow pointer'>
					Idi na košaricu
				</button>
			</div>
		</div>
	);
}

export default PreCart;