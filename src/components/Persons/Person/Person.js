import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';
import classes from './Person.css';

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render(){
        console.log('[Person.js] rendering...');
        return (
        <Aux>
                {
                    this.context.authenticated ?
                        <p>Authenticated!</p> :
                        <p>Please log in!</p>
                }
            <p onClick={this.props.click}>
                I'm {this.props.name} and I'm {this.props.age} years old!
            </p>
            <p>{this.props.children}</p>
            <input
                //ref={(inputEl) => {this.inputElement = inputEl}}
                ref={this.inputElementRef}
                type="text"
                onChange={this.props.changed}
                value={this.props.name}/>
        </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);