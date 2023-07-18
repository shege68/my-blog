import Typography from '@mui/material/Typography'
import logo from 'assets/logo.png'

type Props = {}

const Logo = (props: Props) => {
    return (
        <Typography
            variant="inherit"
            align="left"
            component="div"
            sx={{ flexGrow: 1 }}
        >
            <img src={logo} alt="my-blog logo" />
        </Typography>
    )
}

export default Logo
