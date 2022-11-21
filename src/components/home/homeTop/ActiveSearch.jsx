import React, {useEffect, useState} from 'react';
import './activeSearch.css'
import {NavLink} from "react-router-dom";

function ActiveSearch() {

    /**
     * @param elem.strDrink
     */

    const [search, setSearch] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [sortData, setSortData] = useState([])
    const [resultsDiv, setResultsDiv] = useState('flex')


    const activeSearch = (event) => {
        setInputValue(event.target.value)
        if (event.target.value.length === 1) {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${event.target.value}`)
                .then(resp => {
                    if (resp.ok) {
                        return resp.json()
                    }
                    else {
                        let error = new Error(resp.statusText);
                        error.response = resp;
                        throw error
                    }
                })
                .then(data => {
                    setSearch(data.drinks)
                })
                .catch((e) => {
                    console.log(e.response)
                })
        }
        else if (event.target.value.length === 0) {
            setSortData([])
            setSearch([])
        }
    }

    function sort (data) {
        let dataSort = data.filter(elem => {
            if (elem.strDrink.toLowerCase().includes(inputValue)) {
                return true
            }
        })
        if (dataSort.length === 0) {
            setResultsDiv('none')
        }
        else {
            setResultsDiv('flex')
        }
        setSortData(dataSort)
    }

    useEffect(() => {
        if (search) {
            let sortData = []
            search.map(elem => {
                sortData.push(elem)
            })
            sort(sortData)
        }
    }, [search, inputValue])

    return (
        <>
            <input type="text" placeholder='search by cocktail name' style={{marginBottom: '-10px'}} onChange={activeSearch}/>
            <div className='clickAlcohol'style={{marginTop: '15px',background: 'rgba(228,232,229,0.82)', display: resultsDiv}}>
                <div className='bracket-left'></div>

            <div className='alcoholic'>
            {sortData.length > 0
                ?
                sortData.map(elem => {
                    return <NavLink to={`/cocktail/${elem.idDrink}`} className='ingredients' key={elem.idDrink}>{elem.strDrink}</NavLink>
                })
                :
                '' }
            </div>
                <div className='bracket-right'></div>
            </div>
        </>
    );
}

export default ActiveSearch;