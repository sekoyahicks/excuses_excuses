import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Bars = styled.div`
    font-size: 1.5em;
    display: flex;
    flex-direction: column;
    /* width: 30px; */
    align-items: center;
    justify-content: space-evenly;
    background-color: green;
    color: yellow;
    
    a {
        color: yellow;

    }

`
class Nav extends Component {
    
    render() { 
        return ( 
            <div className="nav">
                <Bars>
                    <div>{'{❌}'}CUSES {'{❌}'}CUSES</div>
                    <Link to="/">To-Do List</Link>
                    <Link to="/xcuses">{'{X}'}CUSES</Link>
                </Bars>
            </div>
         );
    }
}
 
export default Nav;