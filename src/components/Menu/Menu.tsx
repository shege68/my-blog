import { Button } from '@mui/material'
import { useAppSelector } from 'redux/hooks'
import MenuItem from './MenuItem'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { FavoriteBorder } from '@mui/icons-material'
import './MenuItem.scss'

type Props = {}

const Menu = (props: Props) => {
    const counter = useAppSelector((state) => state.articleLikeState.count)
    console.log('🚀 ~ file: Menu.tsx:12 ~ Menu ~ counter:', counter)
    return (
        <>
            <MenuItem to="/">Home</MenuItem>
            <Button color="inherit">
                <div className="dropdown">
                    Categories
                    <div className="dropdown-content">
                        <MenuItem to="/book-of-recipes">Recipes</MenuItem>
                        <MenuItem to="/fresh-food">Restaurant</MenuItem>
                        <MenuItem to="/healthy-eating">Healthy Eating</MenuItem>
                    </div>
                </div>
            </Button>
            <MenuItem to="/about">About</MenuItem>
            <MenuItem to="/contact">Contact</MenuItem>
            <MenuItem to="/favorites">Favorites</MenuItem>
            {counter ? (
                <FavoriteIcon color="warning" />
            ) : (
                <FavoriteBorder color="warning" />
            )}
            <div>{counter}</div>
        </>
    )
}
export default Menu
