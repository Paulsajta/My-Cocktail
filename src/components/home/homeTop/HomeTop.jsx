import React, {useContext, useEffect, useState} from 'react';
import '../home.css'
import {customContext} from "../../../MyContext";
import {drinks} from "./drinks";
import {NavLink} from "react-router-dom";
import {Outlet} from "react-router";
import ActiveSearch from "./ActiveSearch";




function HomeTop() {

    const {setIngredient, ingredient} = useContext(customContext)

    return (
        <>
        <div className='main-top'>
            <ActiveSearch/>
            <p style={{position: "relative", top: '18px'}}>--- by popular ingredient ---</p>
            <div className='clickAlcohol'>
            <div className='bracket-left'></div>
            <div className='alcoholic'>
            {drinks.map(elem => {
               return <NavLink
                   to={`/${elem.strIngredient1.split(' ').join('_')}`}
                   key={elem.strIngredient1}
                   className='ingredients'
                   onClick={() => {setIngredient(elem.strIngredient1.split(' ').join('_'))}}
               >{elem.strIngredient1}</NavLink>
            })}
            </div>
            <div className='bracket-right'></div>
            </div>
            <Outlet/>
        </div>
        </>
    );
}

export default HomeTop;