import React from 'react';
import Cart from './Cart';
import Popup from 'reactjs-popup';
import './Modal.css';

const CartList = ({ items, items_2, itemAdded, minus, remove }) => {
	let sum = 0;

	for (let i = 0; i < items.length; i++) {
		let temp = items_2.find((x) => x.id === items[i].id);
	    sum += (items[i].price*temp.qty);
	}
	return (
		<div>
			{
				items.length === 0
				? <div>
					<h1 className='tc'>Vaša košarica je prazna!</h1>
					<h2 className='tc'>Molimo Vas da se vratite na trgovinu i dodate barem jedan artikal.</h2>
				</div>
				: <div>
					<h1 className='tc'>Vaši artikli:</h1>
					<div className='column'>	{items.map((user, i) => {
								return (
									<Cart 
										key={items[i].id}		//key treba da react brze zna koje izbrisat,a koje ostavit 
										id={items[i].id}
										image={items[i].image} 
										name={items[i].name} 
										price={items[i].price}
										items_2={items_2}
										itemAdded={itemAdded}
										minus={minus}
										remove={remove} 
									/>
								);
							})}
					</div>
					<div className='pa3 ma2'>
						<h1>Ukupna cijena: {sum}kn</h1>
						<Popup
						    trigger={<input 
						            //onClick={this.onSubmitSignIn}
						            className="br3 pa3 ma2 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f2 dib" 
						            style={{backgroundColor: "#9CB4C7"}}
									type="submit" 
						            value="Pošalji narudžbu"
						        />}
						    modal
						  >
						    {close => (
						      <div className="modal tc dib br3 grow bw2 shadow-5" style={{backgroundColor: "#9CB4C7"}}>
						        <button className="close" onClick={close}>
						          &times;
						        </button>
						        <div className="header"> Vaša narudžba je poslana! </div>
						        <div className="actions br3">
						          <button
						            className="button grow br3 f2"
						            onClick={() => {
						              console.log('modal closed ');
						              close();
						            }}
						          >
						            Završi kupnju
						          </button>
						        </div>
						      </div>
						    )}
					  	</Popup>
					</div>
				</div>
			}
		</div>
	);
}

export default CartList;