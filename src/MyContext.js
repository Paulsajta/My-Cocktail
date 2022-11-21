// noinspection JSCheckFunctionSignatures

import {createContext, useReducer} from "react";
import React from 'react';
import {reducer} from "./reducer";
import Ingredients from "./components/home/homeTop/Ingredients";

export const customContext = createContext({})



const initialState = {
    loader: false,
    cocktails: [],
    ingredient: '',
    dataFromLocal: [],
    favorite: (localStorage.getItem('favorites')) ? JSON.parse(localStorage.getItem('favorites')) : []
}

function MyContext({children}) {

    const [state,dispatch] = useReducer(reducer,initialState)

    state.setCocktails = (data) => {
        dispatch({type: 'SET_COCKTAILS', payload: data})
    }
    state.setIngredient = (name) => {
        dispatch({type: 'SET_INGREDIENT', payload: name})
    }
    state.addToFavorites = (item, id) => {
        dispatch({type: 'ADD_FAVORITES', payload: {item, id}})
    }
    state.deleteFromFavorites = (id) => {
        dispatch({type: 'DELETE_FROM_FAVORITES', payload: id})
    }
    state.addFavoriteLocal = () => {
        dispatch({type: 'ADD_FAVORITE_LOCAL'})
    }
    state.setLoader = (status) => {
        dispatch({type: 'SET_LOADER', payload: status})
    }

    return (
        <customContext.Provider value={state}>
            {children}
        </customContext.Provider>
        )
}

export default MyContext;