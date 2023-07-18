import {
    createStyles,
    Menu,
    Group,
    Center,
    Burger,
    rem,
    Header,
    Transition,
    Paper,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Container } from '@mui/material'
import { IconChevronDown } from '@tabler/icons-react'
import Logo from 'components/Logo/Logo'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'
import linksArray from 'utils/linksArray'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { FavoriteBorder } from '@mui/icons-material'

const HEADER_HEIGHT = rem(60)

const useStyles = createStyles((theme) => ({
    header: {
        position: 'sticky',
        backgroundColor: theme.fn.variant({
            variant: 'filled',
            color: 'yellow',
        }).background,
        borderBottom: 0,
    },

    inner: {
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    counter: {
        color: 'white',
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.white,
        fontSize: theme.fontSizes.md,
        fontWeight: 700,

        '&:hover': {
            backgroundColor: theme.fn.variant({
                variant: 'filled',
                color: 'cyan',
            }).background,
        },
    },
    dropdown: {
        fontSize: theme.fontSizes.md,
        fontWeight: 700,
        color: 'white',
        textDecoration: 'none',
        marginBottom: '2px',
        backgroundColor: theme.fn.variant({
            variant: 'filled',
            color: 'yellow',
        }).background,
        '&:hover': {
            backgroundColor: theme.fn.variant({
                variant: 'filled',
                color: 'cyan',
            }).background,
            fontSize: theme.fontSizes.md,
            fontWeight: 700,
        },
    },

    menuTransition: {
        position: 'absolute',
        top: HEADER_HEIGHT,
        left: '75%',
        right: 0,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: theme.fn.variant({
            variant: 'filled',
            color: 'yellow',
        }).background,
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
        // '&:hover': {
        //     transition: 'slide-left',
        // },
    },

    linkLabel: {
        marginRight: rem(10),
    },
    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({
                variant: 'light',
                color: theme.primaryColor,
            }).background,
            color: theme.fn.variant({
                variant: 'light',
                color: 'yellow',
            }).color,
        },
    },
}))

type Props = {}

const HeaderMenuColored = (props: Props) => {
    const counter = useAppSelector((state) => state.articleLikeState.count)
    const [opened, { toggle, close }] = useDisclosure(false)
    const [activeItems, setActiveItems] = useState(linksArray[0].link)
    const { classes, cx } = useStyles()

    const items = linksArray.map((link) => {
        const menuItems = link.links?.map((item) => (
            <NavLink
                to={item.link}
                key={item.label}
                className={cx(classes.dropdown, {
                    [classes.linkActive]: activeItems[1] === link.link,
                })}
                onClick={(event) => {
                    setActiveItems(link.link)
                    close()
                }}
            >
                <Menu.Item key={item.label} className={classes.dropdown}>
                    {item.label}
                </Menu.Item>
            </NavLink>
        ))

        if (menuItems) {
            return (
                <Menu
                    key={link.label}
                    trigger="hover"
                    transitionProps={{ exitDuration: 300 }}
                    //withinPortal
                    position="bottom"
                    offset={3}
                    //zIndex={1}
                >
                    <Menu.Target>
                        <Center className={classes.link}>
                            <span className={classes.linkLabel}>
                                {link.label}
                            </span>
                            <IconChevronDown size="0.9rem" stroke={1.5} />
                        </Center>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            )
        }

        return (
            <NavLink
                to={link.link}
                key={link.label}
                className={cx(classes.link, {
                    [classes.linkActive]: activeItems === link.link,
                })}
                onClick={(event) => {
                    setActiveItems(link.link)
                    close()
                }}
            >
                {link.label}
            </NavLink>
        )
    })

    return (
        <Header height={60} className={classes.header}>
            <Container sx={{ height: '100%' }}>
                <div className={classes.inner}>
                    <Logo />
                    <Group spacing={5} className={classes.links}>
                        {items}
                        {counter ? (
                            <FavoriteIcon color="warning" />
                        ) : (
                            <FavoriteBorder color="warning" />
                        )}
                        <span className={classes.counter}>{counter}</span>
                    </Group>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        className={classes.burger}
                        size="sm"
                        color="#fff"
                    />
                    <Transition
                        transition="slide-left"
                        duration={200}
                        mounted={opened}
                    >
                        {(styles) => (
                            <Paper
                                className={classes.menuTransition}
                                withBorder
                                style={styles}
                            >
                                {items}
                            </Paper>
                        )}
                    </Transition>
                </div>
            </Container>
        </Header>
    )
}

export default HeaderMenuColored
