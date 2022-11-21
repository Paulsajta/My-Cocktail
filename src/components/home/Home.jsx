import React, {useContext} from 'react';
import './home.css'
import HomeTop from "./homeTop/HomeTop";

import {customContext} from "../../MyContext";
import HomeMain from "./HomeMain";

function Home() {

    const {ingredient} = useContext(customContext)

    return (
        <>
            <HomeTop/>
            {(ingredient === '') ? <HomeMain/>: ''}
        </>
    );
}

export default Home;