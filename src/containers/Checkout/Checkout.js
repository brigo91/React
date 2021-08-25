import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component{
	state = {
		ingredients: null,
		totalPrice: 0
	} 

	componentWillMount(){
		console.log(this.props);
		const query = new URLSearchParams(this.props.location.search);
		const ingredients = {};
		let price = 0;
		for(let [key, value] of query.entries()){
			if(key === 'price'){
				price = value;
			}else{
				ingredients[key] = +value;
			}
		}
		this.setState({ingredients: ingredients, totalPrice: price});
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
				<Route
					path={this.props.match.path + '/contact-data'}
					component={(props) => (<ContactData ingredients={this.state.ingredients } price={this.state.totalPrice} {...props}/>)}/>
			</div>
		);
	}
}

export default Checkout;
