import { createStyles, Menu, Group, Center, Burger, rem } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Container } from '@mui/material'
import { IconChevronDown } from '@tabler/icons-react'
import Logo from 'components/Logo/Logo'

const useStyles = createStyles((theme) => ({
    header: {
        position: 'fixed',
        backgroundColor: theme.fn.variant({
            variant: 'filled',
            color: 'yellow',
        }).background,
        borderBottom: 0,
        // backgroundColor: 'lightslategrey',
    },

    inner: {
        height: rem(56),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        color: theme.primaryColor,
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.fn.lighten(
                theme.fn.variant({
                    variant: 'filled',
                    color: theme.primaryColor,
                }).background!,
                0.1
            ),
        },
    },

    linkLabel: {
        marginRight: rem(5),
    },
}))

type Props = {}

const HeaderMenuColored = (props: Props) => {
    const links = [
        { link: '/about', label: 'Features' },
        {
            link: '#1',
            label: 'Learn',
            links: [
                { link: '/docs', label: 'Documentation' },
                { link: '/resources', label: 'Resources' },
                { link: '/community', label: 'Community' },
                { link: '/blog', label: 'Blog' },
            ],
        },
        { link: '/about', label: 'About' },
        { link: '/pricing', label: 'Pricing' },
        // {
        //     link: '#2',
        //     label: 'Support',
        //     links: [
        //         { link: '/faq', label: 'FAQ' },
        //         { link: '/demo', label: 'Book a demo' },
        //         { link: '/forums', label: 'Forums' },
        //     ],
        // },
    ]

    const [opened, { toggle }] = useDisclosure(false)
    const { classes } = useStyles()

    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item key={item.link}>{item.label}</Menu.Item>
        ))

        if (menuItems) {
            return (
                <Menu
                    key={link.label}
                    trigger="hover"
                    transitionProps={{ exitDuration: 0 }}
                    withinPortal
                >
                    <Menu.Target>
                        <a
                            href={link.link}
                            className={classes.link}
                            onClick={(event) => event.preventDefault()}
                        >
                            <Center>
                                <span className={classes.linkLabel}>
                                    {link.label}
                                </span>
                                <IconChevronDown size="0.9rem" stroke={1.5} />
                            </Center>
                        </a>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            )
        }

        return (
            <a
                key={link.label}
                href={link.link}
                className={classes.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </a>
        )
    })

    return (
        <Container>
            <div className={classes.inner}>
                <Logo />
                <Group spacing={5} className={classes.links}>
                    {items}
                </Group>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    className={classes.burger}
                    size="sm"
                    color="#fff"
                />
            </div>
        </Container>
    )
}

export default HeaderMenuColored
