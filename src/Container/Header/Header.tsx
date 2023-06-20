import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Container } from '@mui/material'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'
import './Header.scss'

type Props = {}

const Header = (props: Props) => {
    return (
        <AppBar position="sticky" className="app-bar">
            <Container>
                <Toolbar className="test">
                    <Logo />
                    <Menu />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
