import { Button } from '@mui/material'
import MenuItem from './MenuItem'
import './MenuItem.scss'

type Props = {}
const Menu = (props: Props) => {
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
        </>
    )
}
export default Menu
