import {Route, Routes, useLocation} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/home/Home";
import About from "./About";
import Ingredients from "./components/home/homeTop/Ingredients";
import InfoCocktail from './components/cocktail info/InfoCocktail'
import Favorites from "./components/favorites/Favorites";
import {AnimatePresence} from "framer-motion";


function App() {

    const location = useLocation()

  return (
      <AnimatePresence>
      <Routes location={location} key={location.pathname}>
          <Route path='/'  element={<Layout/>}>
              <Route path='/' element={<Home/>}>
                  <Route path='/:id' element={<Ingredients/>}/>
                  <Route path='/cocktail/:id' element={<InfoCocktail/>}/>
              </Route>
              <Route path='/favorites' element={<Favorites/>}/>
              <Route path='/about' element={<About/>} />
          </Route>

      </Routes>
      </AnimatePresence>
  );
}

export default App;
