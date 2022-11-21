import React, {useContext, useEffect, useRef, useState} from 'react';
import {customContext} from "../../MyContext";
import FavoritesItem from "./FavoritesItem";
import './Favorites.css'
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";

function Favorites() {
    const navigate = useNavigate()
    const {dataFromLocal} = useContext(customContext)
    const nodeRef = useRef()


    return (
        <>
            <button className='btn-small' onClick={()=> navigate(-1)}>{'<<'}</button>
            {(dataFromLocal.length > 0)
                ?
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                >
                    <TransitionGroup className='favorites-wrap'>
                        {dataFromLocal.map((elem) => (
                            <CSSTransition
                                key={elem.idDrink}
                                timeout={200}
                                classNames='fav'
                            >
                                <FavoritesItem elem={elem} key={elem.idDrink} nodeRef={nodeRef}/>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </motion.div>
                :
                <p className='empty-favorites'>Your favorite list is empty, please add something:)</p>
            }

        </>
    );
}

export default Favorites;