import React, { useEffect, useRef } from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);

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
        /* setTimeout(()=>{
            alert("Saved data to the cloud");
        }, 1000); */
        toggleBtnRef.current.click();
        return ()=>{
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    })

    const assingendClasses = [];
    let btnClass = '';
    if (props.showPersons){
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2){
        assingendClasses.push(classes.red);
    }

    if (props.personsLength <= 1){
        assingendClasses.push(classes.bold);
    }


    return (
    <div className={classes.Cockpit}>
        <h3>{props.title}</h3>
        <p className={assingendClasses.join(' ')}>This is really working!</p>
        <button
            ref={toggleBtnRef}
            className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
        <button onClick={props.login}>Log In</button>
    </div>
    );
};

export default React.memo(cockpit);