import React, {useContext} from 'react';
import './header.css'
import {NavLink} from "react-router-dom";
import {customContext} from "../../MyContext";


function Header() {

    const {ingredient, setIngredient} = useContext(customContext)

    return (
        <>
        <header>
            <h2>MY C<span style={{color: '#79e1d2'}}>O</span>CKTAIL</h2>
            <nav>
                <div className='nav'>
                    <NavLink end='/' to='/' onClick={() => setIngredient('')}>Home</NavLink>
                    <NavLink to='favorites'>Favorites</NavLink>
                    <NavLink to='about'>About</NavLink>
                </div>

            </nav>
        </header>

        </>
    );
}

export default Header;