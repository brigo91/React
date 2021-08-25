import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component{
	state = {
		ingredients: {
			salad: 1,
			meat: 1,
			cheese: 1,
			bacon: 1
		}
	}

	componentDidMount(){
		console.log(this.props);
		const query = new URLSearchParams(this.props.location.search);
		const ingredients = {};
		for(let [key, value] of query.entries()){
			ingredients[key] = +value;
		}
		this.setState({ingredients: ingredients});
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
				<Route path={this.props.match.path + '/contact-data'} component={ContactData}/>
			</div>
		);
	}
}

export default Checkout;
