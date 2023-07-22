import {
    createStyles,
    Header,
    HoverCard,
    Group,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    rem,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconChevronDown } from '@tabler/icons-react'
import Logo from 'components/Logo/Logo'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { FavoriteBorder } from '@mui/icons-material'
import linksArray from 'utils/linksArray'

const useStyles = createStyles((theme) => ({
    header: {
        backgroundColor:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[1],
    },

    link: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontWeight: 500,
        fontSize: theme.fontSizes.sm,

        [theme.fn.smallerThan('sm')]: {
            height: rem(42),
            display: 'flex',
            alignItems: 'center',
            width: '100%',
        },

        ...theme.fn.hover({
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
        }),
    },

    subLink: {
        width: '100%',
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
        borderRadius: theme.radius.md,

        ...theme.fn.hover({
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[7]
                    : theme.colors.gray[0],
        }),

        '&:active': theme.activeStyles,
    },

    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    hiddenDesktop: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    counter: {
        marginLeft: '4px',
    },
}))

type Props = {}

const HeaderMegaMenu = (props: Props) => {
    const counter = useAppSelector((state) => state.articleLikeState.count)

    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
        useDisclosure(false)
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
    const { classes, theme } = useStyles()

    const links = linksArray.map((item) => (
        <NavLink to={item.link} key={item.title}>
            <UnstyledButton className={classes.subLink} key={item.title}>
                <Group align="flex-start">
                    <ThemeIcon size={34} variant="default" radius="md">
                        <item.icon size={rem(22)} color="#25b7d3" />
                    </ThemeIcon>
                    <div>
                        <Text size="sm" fw={500}>
                            {item.title}
                        </Text>
                        <Text size="xs" color="dimmed">
                            {item.description}
                        </Text>
                    </div>
                </Group>
            </UnstyledButton>
        </NavLink>
    ))

    return (
        <Box pb={60}>
            <Header className={classes.header} height={60} px="md" fixed>
                <Group position="apart" sx={{ height: '100%' }}>
                    <Logo />
                    <Group
                        sx={{ height: '100%' }}
                        spacing={0}
                        className={classes.hiddenMobile}
                    >
                        <NavLink to={'/'} className={classes.link}>
                            Home
                        </NavLink>
                        <HoverCard
                            width={400}
                            position="bottom"
                            radius="md"
                            shadow="md"
                            withinPortal
                        >
                            <HoverCard.Target>
                                <UnstyledButton
                                    className={classes.link}
                                    onClick={toggleLinks}
                                >
                                    <Center inline>
                                        <Box component="span" mr={5}>
                                            Categoty
                                        </Box>
                                        <IconChevronDown
                                            size={16}
                                            color="#25b7d3"
                                        />
                                    </Center>
                                </UnstyledButton>
                            </HoverCard.Target>

                            <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
                                <SimpleGrid cols={1} spacing={0}>
                                    {links}
                                </SimpleGrid>
                            </HoverCard.Dropdown>
                        </HoverCard>
                        <NavLink to={'/about'} className={classes.link}>
                            About
                        </NavLink>
                        <NavLink to={'/contact'} className={classes.link}>
                            Contact
                        </NavLink>
                        <NavLink to={'/favorites'} className={classes.link}>
                            Favorites
                            {counter ? (
                                <FavoriteIcon color="warning" />
                            ) : (
                                <FavoriteBorder color="warning" />
                            )}
                            <span className={classes.counter}>{counter}</span>
                        </NavLink>
                    </Group>

                    <Burger
                        opened={drawerOpened}
                        onClick={toggleDrawer}
                        className={classes.hiddenDesktop}
                    />
                </Group>
            </Header>

            <Drawer
                opened={drawerOpened}
                closeOnClickOutside
                onClose={closeDrawer}
                position="right"
                size="30rem"
                padding="md"
                transitionProps={{
                    transition: 'slide-left',
                    duration: 300,
                    timingFunction: 'linear',
                }}
                overlayProps={{ opacity: 0.5, blur: 4 }}
                className={classes.hiddenDesktop}
            >
                <NavLink to={'/'} className={classes.link}>
                    Home
                </NavLink>
                <UnstyledButton className={classes.link} onClick={toggleLinks}>
                    <Center inline>
                        <Box component="span" mr={5}>
                            Category
                        </Box>
                        <IconChevronDown size={16} color="#25b7d3" />
                    </Center>
                </UnstyledButton>
                <Collapse in={linksOpened}>{links}</Collapse>
                <NavLink to={'/about'} className={classes.link}>
                    About
                </NavLink>
                <NavLink to={'/contact'} className={classes.link}>
                    Contact
                </NavLink>
                <NavLink to={'/favorites'} className={classes.link}>
                    Favorites
                    {counter ? (
                        <FavoriteIcon color="warning" />
                    ) : (
                        <FavoriteBorder color="warning" />
                    )}
                    <span className={classes.counter}>{counter}</span>
                </NavLink>

                <Divider
                    my="sm"
                    color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                />
            </Drawer>
        </Box>
    )
}

export default HeaderMegaMenu
