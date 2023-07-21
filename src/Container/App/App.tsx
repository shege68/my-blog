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

const App = () => {
    return (
        <StyledEngineProvider injectFirst>
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
        </StyledEngineProvider>
    )
}

export default App
