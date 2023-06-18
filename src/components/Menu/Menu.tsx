import MenuItem from './MenuItem'

type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/categories">Categories</MenuItem>
            <MenuItem to="/about">About</MenuItem>
            <MenuItem to="/contact">Contact</MenuItem>
            <MenuItem to="/favorites">Favorites</MenuItem>
        </>
    )
}
export default Menu
