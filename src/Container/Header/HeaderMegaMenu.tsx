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
import {
    IconCoffee,
    IconBook,
    IconHealthRecognition,
    IconChevronDown,
} from '@tabler/icons-react'
import Logo from 'components/Logo/Logo'
import { NavLink } from 'react-router-dom'

const useStyles = createStyles((theme) => ({
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
}))

const mockdata = [
    {
        icon: IconBook,
        title: 'Book-recipes',
        link: '/book-of-recipes',
        description: 'Yanma is capable of seeing 360 degrees without',
    },
    {
        icon: IconCoffee,
        title: 'Restaurant',
        link: '/restaurant',
        description: 'This Pokémon’s cry is very loud and distracting',
    },
    {
        icon: IconHealthRecognition,
        title: 'Healthy Eating',
        link: '/healthy-eating',
        description: 'The fluid of Smeargle’s tail secretions changes',
    },
]

type Props = {}

const HeaderMegaMenu = (props: Props) => {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
        useDisclosure(false)
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
    const { classes, theme } = useStyles()

    const links = mockdata.map((item) => (
        <NavLink to={item.link}>
            <UnstyledButton className={classes.subLink} key={item.title}>
                <Group noWrap align="flex-start">
                    <ThemeIcon size={34} variant="default" radius="md">
                        <item.icon
                            size={rem(22)}
                            color={theme.fn.primaryColor()}
                        />
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
            <Header height={60} px="md" fixed>
                <Group position="apart" sx={{ height: '100%' }}>
                    <Logo />
                    <Group
                        sx={{ height: '100%' }}
                        spacing={0}
                        className={classes.hiddenMobile}
                    >
                        <a href="/" className={classes.link}>
                            Home
                        </a>
                        <HoverCard
                            width={600}
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
                                            color={theme.fn.primaryColor()}
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
                        <a href="/about" className={classes.link}>
                            About
                        </a>
                        <a href="/contact" className={classes.link}>
                            Contact
                        </a>
                        <a href="/favorites" className={classes.link}>
                            Favorites
                        </a>
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
                onClose={closeDrawer}
                position="top"
                size="30%"
                padding="md"
                transitionProps={{
                    transition: 'slide-down',
                    duration: 150,
                    timingFunction: 'linear',
                }}
                overlayProps={{ opacity: 0.5, blur: 4 }}
                className={classes.hiddenDesktop}
                //zIndex={1000000}
            >
                <a href="/" className={classes.link}>
                    Home
                </a>
                <UnstyledButton className={classes.link} onClick={toggleLinks}>
                    <Center inline>
                        <Box component="span" mr={5}>
                            Category
                        </Box>
                        <IconChevronDown
                            size={16}
                            color={theme.fn.primaryColor()}
                        />
                    </Center>
                </UnstyledButton>
                <Collapse in={linksOpened}>{links}</Collapse>
                <a href="/about" className={classes.link}>
                    About
                </a>
                <a href="/contact" className={classes.link}>
                    Contact
                </a>
                <a href="/favorites" className={classes.link}>
                    Favorites
                </a>

                <Divider
                    my="sm"
                    color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                />
            </Drawer>
        </Box>
    )
}

export default HeaderMegaMenu
