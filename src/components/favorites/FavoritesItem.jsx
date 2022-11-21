import React, {useContext} from 'react';
import {customContext} from "../../MyContext";
import './Favorites.css'

function FavoritesItem({elem, nodeRef}) {

    const {
        idDrink,
        strDrinkThumb,
        strDrink,
        strInstructions,
        strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10,
        strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10,
    } = elem

    const {deleteFromFavorites} = useContext(customContext)

    return (
        <div className='item-container' ref={nodeRef}>
            <div className='about-cocktail'><span className='cocktail-name'>{strDrink}{' - '}</span>{strInstructions}</div>
            <div className='item-wrap'>
                <div className='pic-wrap'><div className='pic' style={{backgroundImage: `url(${strDrinkThumb})`}}></div></div>
                    <div className='dose info'>
                    {(strIngredient1) ? <span>{strIngredient1}: {strMeasure1} </span> : ''}
                    {(strIngredient2) ? <span>{strIngredient2}: {strMeasure2} </span> : ''}
                    {(strIngredient3) ? <span>{strIngredient3}: {strMeasure3} </span> : ''}
                    {(strIngredient4) ? <span>{strIngredient4}: {strMeasure4} </span> : ''}
                    {(strIngredient5) ? <span>{strIngredient5}: {strMeasure5} </span> : ''}
                    {(strIngredient6) ? <span>{strIngredient6}: {strMeasure6} </span> : ''}
                    {(strIngredient7) ? <span>{strIngredient7}: {strMeasure7} </span> : ''}
                    {(strIngredient8) ? <span>{strIngredient8}: {strMeasure8} </span> : ''}
                    </div>
            </div>
            <div className='delete-wrap'>
                <button className="delete btn-small" onClick={() => deleteFromFavorites(idDrink)}>x</button>
            </div>
        </div>
    );
}

export default FavoritesItem;