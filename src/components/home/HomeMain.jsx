import React from 'react';
import './homeMain.css'
import RandomCocktail from "./RandomCocktail";

function HomeMain() {

    return (
        <div className='home-main-info'>
            {/*<div className='main-left'>llll</div>*/}
            {/*<div className='main-right'>rrrr</div>*/}
            <div className="main-bottom">
                <h6 className='block-title'>RANDOM COCKTAIL</h6>
                <RandomCocktail/>
            </div>
        </div>
    );
}

export default HomeMain;