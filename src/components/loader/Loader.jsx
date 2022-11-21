import React, {useContext, useEffect, useState} from 'react';
import './loader.css'
import {Transition} from "react-transition-group";
import {customContext} from "../../MyContext";


function Loader() {

    const {loader} = useContext(customContext)

    return (

        <Transition
            in={loader}
            timeout={300}
            mountOnEnter
            unmountOnExit
        >
            {state => <div className={`loader ${state}`}/>}
        </Transition>

    );
}

export default Loader;