import React from 'react';
import classes from './Order.module.css';


const order = (props) => (
    <div className={classes.Order}>
        <p>Ingredients: Saala (1)</p>
        <p>Price: <string>USD 4.5</string></p>
    </div>
);

export default order;