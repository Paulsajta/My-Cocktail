import React, {useContext, useEffect, useState} from 'react';
import './cocktail.css'
import {json, NavLink} from "react-router-dom";
import pic from './heart.png'
import pic2 from './heart-2.png'
import {customContext} from "../../../MyContext";
import {useParams} from "react-router";


function Cocktail({item}) {

    const {strDrink,strDrinkThumb,idDrink} = item
    const [heart, setHeart] = useState(false)
    const {favorite, dataFromLocal,addFavoriteLocal, addToFavorites, deleteFromFavorites} = useContext(customContext)

    const changeFavoriteStatus = () => {
        if (heart) {
            setHeart(false)
            deleteFromFavorites(idDrink)
        }
        else {
            setHeart(true)
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
                .then(resp => resp.json())
                .then(data => {
                    addToFavorites(data.drinks[0], idDrink)
                })
        }
    }

    useEffect(() => {
        if (dataFromLocal.length > 0) {
            dataFromLocal.map(elem => {
                if (elem.idDrink === idDrink) {
                    setHeart(true)
                }
            })
        }
        }, [dataFromLocal])

    return (
            <div className="card" >
                <div className="card-image waves-effect waves-block waves-light" style={{backgroundImage: `url(${strDrinkThumb})`}}>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{strDrink}</span>

                </div>
                <div className='link-cocktail'>
                    <div className='button-add'><img alt='heart' style={{width: '20px'}} src={(heart) ? pic2 : pic} onClick={changeFavoriteStatus}></img></div>

                    <NavLink className="waves-effect waves-light btn-small" to={`/cocktail/${idDrink}`}>INFO</NavLink>
                </div>
            </div>
    );
}

export default Cocktail;