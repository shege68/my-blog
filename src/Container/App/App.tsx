import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import About from 'pages/About/About'
import Recipes from 'pages/Categories/Recipes'
import Contact from 'pages/Contact/Contact'
import Favorites from 'pages/Favorites/Favorites'
import Restaurant from 'pages/Categories/Restaurant'
import HealthyEating from 'pages/Categories/HealthyEating'
import Article from 'pages/Article/Article'
import Footer from 'Container/Footer/Footer'
import HeaderMegaMenu from 'Container/Header/HeaderMegaMenu'
import { createContext, useState } from 'react'
import articlesArray from 'utils/articlesArray'

type Context = {
    addArticlesToFavorites: (arrayLiked: [string, boolean][]) => void
}

export const AppContext = createContext<Context | null>(null)

const App = () => {
    const [newArticlesArray, setNewArticlesArray] = useState(articlesArray)
    console.log(
        '🚀 ~ file: App.tsx:25 ~ App ~ newArticlesArray:',
        newArticlesArray
    )

    function addArticlesToFavorites(arrayLiked: [string, boolean][]) {
        setNewArticlesArray(
            newArticlesArray.map((item) => {
                return {
                    ...item,
                    //liked: (...arrayLiked.map((item)=> item.values))

                    // ...arrayLiked.map((item) => ({
                    //     liked: item,
                    // })),
                    //liked: arrayLiked[0],
                }
            })
        )
    }

    return (
        <StyledEngineProvider injectFirst>
            <AppContext.Provider
                value={{ addArticlesToFavorites: addArticlesToFavorites }}
            >
                <CssBaseline />
                <HeaderMegaMenu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/book-of-recipes" element={<Recipes />} />
                    <Route path="/restaurant" element={<Restaurant />} />
                    <Route path="/healthy-eating" element={<HealthyEating />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/article/:id" element={<Article />} />
                </Routes>
                <Footer />
            </AppContext.Provider>
        </StyledEngineProvider>
    )
}

export default App
