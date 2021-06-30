import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    /* useEffect(()=>{
        console.log('[App.js] useEffect');
        //Http request...
        setTimeout(()=>{
            alert("Saved data to the cloud");
        }, 1000);
    }, [props.persons]); */

    useEffect(()=>{
        console.log('[App.js] useEffect');
        //Http request...
        setTimeout(()=>{
            alert("Saved data to the cloud");
        }, 1000);
    }, []);

    const assingendClasses = [];
    let btnClass = '';
    if (props.showPersons){
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2){
        assingendClasses.push(classes.red);
    }

    if (props.persons.length <= 1){
        assingendClasses.push(classes.bold);
    }


    return (
    <div className={classes.Cockpit}>
        <h3>{props.title}</h3>
        <p className={assingendClasses.join(' ')}>This is really working!</p>
        <button
            className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
    </div>
    );
};

export default cockpit;