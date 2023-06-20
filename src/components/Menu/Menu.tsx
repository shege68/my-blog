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
                        <MenuItem to="/book-of-recipes">BookOfRecipes</MenuItem>
                        <MenuItem to="/fresh-food">FreshFood</MenuItem>
                        <MenuItem to="/healthy-eating">HealthyEating</MenuItem>
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
