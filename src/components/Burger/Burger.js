import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredinet';

const burger = ( props ) => {
	const transormesIngredients = Object.keys(props.ingredients)
		.map(igKey => {
			return [...Array(props.ingredients[igKey])].map(_ => {
				return <BurgerIngredient key={igKey + 1} type={igKey} />;
			});
		});

	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
			{transormesIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default burger;
