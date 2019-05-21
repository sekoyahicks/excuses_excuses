import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from "styled-components";

class Nav extends Component {
    
    render() { 
        return ( 
            <div className="nav">
                <navi>
                    <div>Xcuses Xcuses</div>
                    <Link to="/">To-Do List</Link>
                    <Link to="/xcuses">Xcuses List</Link>
                </navi>
            </div>
         );
    }
}
 
export default Nav;