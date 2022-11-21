import React, {useContext, useEffect, useMemo} from 'react';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {Outlet} from "react-router";
import {customContext} from "./MyContext";
import HomeMain from "./components/home/HomeMain";

function Layout() {

    const {favorite, addFavoriteLocal, ingredient} = useContext(customContext)

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorite))
        addFavoriteLocal()
    }, [favorite])

    return (
        <>
            <Header/>
            <div className='container'>
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
}

export default Layout;