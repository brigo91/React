import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Users from './containers/Users';
import asyncComponent from './hoc/asyncComponent';

const AsyncPizza = asyncComponent(() => {
	return import('./containers/Pizza.js');
})
class App extends Component{
	render(){
		return (
			<div>
				<div>
					<Link to="/">Users</Link>
					<Link to="/pizza">Pizza</Link>
				</div>
				<div>
					<Routes >
						<Route path="/" exact element={<Users />} />
						<Route path="/pizza" element={<AsyncPizza />} /> 
					</Routes>
				</div>
			</div>
		);
	}
}

export default App;
