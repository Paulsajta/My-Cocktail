import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import './InfoCocktails.css'
import {useParams} from "react-router";
import {customContext} from "../../MyContext";
import Loader from "../loader/Loader";

function InfoCocktail() {
    /**
     * @param data.drinks[0] info obout cocktail
     */

    const navigate = useNavigate()
    const {id} = useParams()
    const [cocktail, setCocktail] = useState({})
    const [isInFavorites, setIsInFavorites] = useState(false)
    const {favorite, addToFavorites, loader, setLoader, setIngredient} = useContext(customContext)
    const {
        idDrink,
        strDrinkThumb,
        strDrink,
        strInstructions,
        strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9,
        strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9
    } = cocktail



    useEffect(() => {
        setIngredient('some')
        setLoader(true)
        let url = ''
        if (id === 'undefined') {
            url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
        }
        else {
            url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        }
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setCocktail(data.drinks[0])
                favorite.map(elem => {
                    if (elem.idDrink === data.drinks[0].idDrink) {
                        setIsInFavorites(true)
                    }
                })
                setLoader(false)
            })
    }, [])

    return (
        <>
        {
        (!loader) ?
            <div className='info-container'>
            <button className="waves-effect waves-light btn-small" onClick={() => navigate(-1)}>{'<<'}</button>
                <button
                    disabled={(isInFavorites)}
                    className='btn-small'
                    onClick={() => {
                        addToFavorites(cocktail,idDrink)
                        setIsInFavorites(true)
                    }}>
                    Add+
                </button>
                {(isInFavorites) ? <p style={{color: 'red'}}>already in favorites</p> : ''}
            <div className='info-cocktail'>
                <div className='info-image'>
                    <img alt='' src={strDrinkThumb}/>
                </div>
                <div className='info-recipe'>
                    <h5>{strDrink}</h5>
                    <p>{strInstructions}</p>
                </div>
                <div className='cocktail-dose'>
                    <div className='left-info'>ingredients:
                    <ul>
                        <li>{strIngredient1}</li>
                        <li>{strIngredient2}</li>
                        <li>{strIngredient3}</li>
                        <li>{strIngredient4}</li>
                        <li>{strIngredient5}</li>
                        <li>{strIngredient6}</li>
                        <li>{strIngredient7}</li>
                        <li>{strIngredient8}</li>
                        <li>{strIngredient9}</li>
                    </ul>
                    </div>
                    <div className='right-info'>dose:
                        <ul>
                            <li>{strMeasure1}</li>
                            <li>{strMeasure2}</li>
                            <li>{strMeasure3}</li>
                            <li>{strMeasure4}</li>
                            <li>{strMeasure5}</li>
                            <li>{strMeasure6}</li>
                            <li>{strMeasure7}</li>
                            <li>{strMeasure8}</li>
                            <li>{strMeasure9}</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div> : <Loader/>
        }
        </>
    );
}



export default InfoCocktail;