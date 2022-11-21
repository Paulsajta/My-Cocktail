import React from 'react';


export function reducer(state,{payload, type}) {
    switch (type) {
        case 'SET_COCKTAILS' : {
            return {
                ...state,
                cocktails: payload
            }
        }
        case 'SET_INGREDIENT' : {
            return {
                ...state,
                ingredient: payload
            }
        }
        case 'ADD_FAVORITES' : {
            if (state.favorite.length !== 0) {
                const isInFavorite = state.favorite.filter(elem => {
                    return elem.idDrink !== payload.id
                })
                return {
                    ...state,
                    favorite: [...isInFavorite, payload.item]
                }
            }
            else {
                return {
                    ...state,
                    favorite: [payload.item]
                }
            }
        }
        case 'ADD_FAVORITE_LOCAL' : {
            const dataFromLocal = localStorage.getItem('favorites')
            return {
                ...state,
                dataFromLocal: JSON.parse(dataFromLocal)
            }
        }
        case 'DELETE_FROM_FAVORITES' : {
            const favoriteRes = state.favorite.filter(elem => {
                return elem.idDrink !== payload
            })
            return {
                ...state,
                favorite: favoriteRes
            }
        }
        case 'SET_LOADER' : {
            return {
                ...state,
                loader: payload
            }
        }
        default:
            return state
    }
}

