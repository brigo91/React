import React from 'react';

import Aux from '../../../hoc/Aux';

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
		</Aux>
	);
};

export default orederSummary;
