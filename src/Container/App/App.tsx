import Header from 'Container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import About from 'pages/About/About'
import BookOfRecipes from 'pages/Categories/BookOfRecipes'
import Contact from 'pages/Contact/Contact'
import Favorites from 'pages/Favorites/Favorites'
import FreshFood from 'pages/Categories/FreshFood'
import HealthyEating from 'pages/Categories/HealthyEating'

const App = () => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/book-of-recipes" element={<BookOfRecipes />} />
                <Route path="/fresh-food" element={<FreshFood />} />
                <Route path="/healthy-eating" element={<HealthyEating />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </StyledEngineProvider>
    )
}

export default App
