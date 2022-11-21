import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router";
import {customContext} from "../../../MyContext";
import Cocktail from "./Cocktail";
import Loader from "../../loader/Loader";
import {motion} from "framer-motion";
import HomeMain from "../HomeMain";


function Ingredients() {


    /**
     * @param item.idDrink
     */

    const {id} = useParams()


    const {cocktails, setCocktails, loader, setLoader, setIngredient} = useContext(customContext)


    useEffect(() => {
        setIngredient(id)
        setLoader(true)
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${id}`)
            .then(resp => resp.json())
            .then(data => {
                setCocktails(data.drinks)
                setLoader(false)
            })
    }, [])

    return (
        <>
        <div className='search-results'>
            <img src={`https://www.thecocktaildb.com/images/ingredients/${id.split('_').join(' ')}-small.png`} alt=""/>
            <h5>Your cocktails with:{' '}
                <span style={{color: '#79e1d2'}}>{id.split('_').join(' ')}</span>
            </h5>
        </div>
            {(loader) ? <Loader/> :
                <div className='cocktail-container'>
                    {cocktails.map((item) => {
                        return <Cocktail key={item.idDrink} item={item}/>
                    })}
                </div>
            }
        </>
    );
}

export default Ingredients;