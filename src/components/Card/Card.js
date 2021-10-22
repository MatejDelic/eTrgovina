import React from 'react';

const Card = ({ id, image, name, price, itemAdded, onRouteChange }) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='neka slika' src={`./photos/${image}.jpg`} width="300" height="200"/>
			<div>
				<h2>{name}</h2>
				<h3>{`${price}kn`}</h3>
				<input 
				    onClick={() => itemAdded(id,'preCart')}
				    //onClick={() => onRouteChange('preCart')}
				    className="br3 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				    type="submit" 
				    value="Dodaj u košaricu"
				/>
			</div>
		</div>
	);
}

export default Card;