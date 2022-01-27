import React from 'react';
import {NavLink} from 'react-router-dom';

export const Page404 = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Page not found</h1>
            <NavLink to={'/'}>Back to main page</NavLink>
        </div>
    );
}