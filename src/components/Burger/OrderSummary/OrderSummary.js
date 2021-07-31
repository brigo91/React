import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orederSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients)
		.map((igKey) => {
			return (
				<li key={igKey}>
					<span style={{textTransform: 'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
				</li>);
		});
	return (
		<Aux>
			<h3>Your Order</h3>
			<p>A delicious burger with the followoing ingredients:</p>
			<ul>
				{ingredientSummary}
			</ul>
			<p>Contrinue to checkout?</p>
			<Button btnType="Danger" clicked={props.purchaseCancelled} >CANCEL</Button>
			<Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button> 
		</Aux>
	);
};

export default orederSummary;
