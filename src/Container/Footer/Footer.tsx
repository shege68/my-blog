import {
    createStyles,
    Text,
    Container,
    ActionIcon,
    Group,
    rem,
} from '@mantine/core'
import {
    IconBrandTwitter,
    IconBrandYoutube,
    IconBrandInstagram,
} from '@tabler/icons-react'
import Logo from 'components/Logo/Logo'

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: rem(40),
        paddingTop: `calc(${theme.spacing.xl} * 2)`,
        paddingBottom: `calc(${theme.spacing.xl} * 2)`,
        backgroundColor:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[1],
        borderTop: `${rem(1)} solid ${
            theme.colorScheme === 'dark'
                ? theme.colors.dark[5]
                : theme.colors.gray[2]
        }`,
    },

    logo: {
        maxWidth: rem(200),

        [theme.fn.smallerThan('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    description: {
        marginTop: rem(5),

        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.xs,
            textAlign: 'center',
        },
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    groups: {
        display: 'flex',
        flexWrap: 'wrap',

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    wrapper: {
        width: rem(160),
    },

    link: {
        display: 'block',
        color:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[1]
                : theme.colors.gray[6],
        fontSize: theme.fontSizes.sm,
        paddingTop: rem(3),
        paddingBottom: rem(3),

        '&:hover': {
            textDecoration: 'underline',
        },
    },

    title: {
        fontSize: theme.fontSizes.lg,
        fontWeight: 700,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        marginBottom: `calc(${theme.spacing.xs} / 2)`,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },

    afterFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.spacing.xl,
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
        borderTop: `${rem(1)} solid ${
            theme.colorScheme === 'dark'
                ? theme.colors.dark[4]
                : theme.colors.gray[2]
        }`,

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
        },
    },

    social: {
        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.xs,
        },
    },
}))

type Props = {}

const Footer = (props: Props) => {
    const data = [
        {
            title: 'About',
            links: [
                { label: 'Features', link: '#' },
                { label: 'Pricing', link: '#' },
                { label: 'Support', link: '#' },
                { label: 'Forums', link: '#' },
            ],
        },
        {
            title: 'Project',
            links: [
                { label: 'Contribute', link: '#' },
                { label: 'Media assets', link: '#' },
                { label: 'Changelog', link: '#' },
                { label: 'Releases', link: '#' },
            ],
        },
        {
            title: 'Community',
            links: [
                { label: 'Join Discord', link: '#' },
                { label: 'Follow on Twitter', link: '#' },
                { label: 'Email newsletter', link: '#' },
                { label: 'GitHub discussions', link: '#' },
            ],
        },
    ]

    const { classes } = useStyles()

    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <Text<'a'>
                key={index}
                className={classes.link}
                component="a"
                href={link.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </Text>
        ))

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
        )
    })

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    <Logo />
                    <Text
                        size="xs"
                        color="dimmed"
                        className={classes.description}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Unde esse minima error repudiandae magnam dolorum,
                        possimus delectus aut, quia illo quisquam quos rem modi
                        enim, architecto sint officia quo cumque?
                    </Text>
                </div>
                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter}>
                <Text color="dimmed" size="sm">
                    © 2023 Food Blog. All rights reserved.
                </Text>

                <Group
                    spacing={0}
                    className={classes.social}
                    position="right"
                    noWrap
                >
                    <ActionIcon size="lg">
                        <IconBrandTwitter size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <IconBrandYoutube size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <IconBrandInstagram size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
    )
}

export default Footer
