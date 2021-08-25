import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component{
	state = {
		ingredients: {
			salad: 1,
			meat: 1,
			cheese: 1,
			bacon: 1
		}
	}

	checkoutcancelledHandler = () => {
		this.props.history.goBack();
	}

	checkoutContinuedHandler = () => {
		this.props.history.replace('/checkout/contact-data');
	}

	render(){
		return (
			<div>
				<CheckoutSummary
					ingredients={this.state.ingredients}
					checkoutContinued={this.checkoutContinuedHandler}
					checkoutCancelled={this.checkoutcancelledHandler} />
			</div>
		);
	}
}

export default Checkout;
