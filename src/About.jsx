import React from 'react';
import {motion} from "framer-motion";
import pic from './media/cocktailAbout.png'

function About(props) {
    return (
        <motion.article
             initial={{opacity: 0}}
             animate={{opacity: 1}}
             exit={{opacity: 0}}
        >
            <img src={pic}/>
            <h4>What Is Cocktail?</h4>
            <p>A <b>cocktail</b> is any beverage, appetizer, or hors d'oeuvres that’s made with two or more ingredients. Liquid cocktails usually have at least one kind of alcohol in them and food cocktails are typically finger food that’s served cold.</p>

            <p>The word <b>cocktail</b> comes from the Creole apothecary <b>Antoine Peychaud</b> and the drinks he used to serve in <b>New Orleans</b>. Around the mid-1800s, Peychaud used to serve mixed brandy drinks in a French eggcup.</p>

            <p>The <b>French</b> version of the word eggcup is coquetier, which Peychaud’s customers shortened to <b>“cocktay”</b>. Over time, this word was Americanized even further until it became “cocktail” and this version has stuck ever since. Based on this, the word <b>cocktail</b> refers both to the drink itself and the glass it’s served in.</p>
        </motion.article>
    );
}

export default About;