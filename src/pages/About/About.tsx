import {
    createStyles,
    Text,
    Title,
    TextInput,
    Button,
    Image,
    rem,
    Container,
    TypographyStylesProvider,
} from '@mantine/core'
import image from './email-banner.svg'

const useStyles = createStyles((theme) => ({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        padding: `calc(${theme.spacing.xl} * 2)`,
        borderRadius: theme.radius.md,
        backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        border: `${rem(1)} solid ${
            theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[3]
        }`,

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column-reverse',
            padding: theme.spacing.xl,
        },
    },

    image: {
        maxWidth: '40%',

        [theme.fn.smallerThan('sm')]: {
            maxWidth: '100%',
        },
    },

    body: {
        paddingRight: `calc(${theme.spacing.xl} * 4)`,

        [theme.fn.smallerThan('sm')]: {
            paddingRight: 0,
            marginTop: theme.spacing.xl,
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        lineHeight: 1,
        marginBottom: theme.spacing.md,
    },

    controls: {
        display: 'flex',
        marginTop: theme.spacing.xl,
    },

    inputWrapper: {
        width: '100%',
        flex: '1',
    },

    input: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRight: 0,
    },

    control: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },
}))

type Props = {}

const About = (props: Props) => {
    const { classes } = useStyles()
    return (
        <Container sx={{ padding: '30px 20px' }}>
            <Title order={1} align="center" mb={10}>
                About
            </Title>
            <Image
                mx={5}
                radius="md"
                src="./images/about1.jpeg"
                alt="Random image"
                my={5}
            />
            <Text mx={5}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt nulla quam aut sed corporis voluptates praesentium
                    inventore, sapiente ex tempore sit consequatur debitis non!
                    Illo cum ipsa reiciendis quidem facere, deserunt eos totam
                    impedit. Vel ab, ipsum veniam aperiam odit molestiae
                    incidunt minus, sint eos iusto earum quaerat vitae
                    perspiciatis.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt nulla quam aut sed corporis voluptates praesentium
                    inventore, sapiente ex tempore sit consequatur debitis non!
                    Illo cum ipsa reiciendis quidem facere, deserunt eos totam
                    impedit. Vel ab, ipsum veniam aperiam odit molestiae
                    incidunt minus, sint eos iusto earum quaerat vitae
                    perspiciatis.
                </p>
            </Text>
            <Text mx={5}>
                <TypographyStylesProvider>
                    <h3>Subscribe to our newsletter!</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nesciunt nulla quam aut sed corporis voluptates
                        praesentium inventore, sapiente ex tempore sit
                        consequatur debitis non! Illo cum ipsa reiciendis quidem
                        facere, deserunt eos totam impedit. Vel ab, ipsum veniam
                        aperiam odit molestiae incidunt minus, sint eos iusto
                        earum quaerat vitae perspiciatis.
                    </p>
                </TypographyStylesProvider>
            </Text>
            <div className={classes.wrapper}>
                <div className={classes.body}>
                    <Title className={classes.title}>Wait a minute...</Title>
                    <Text fw={500} fz="lg" mb={5}>
                        Subscribe to our newsletter!
                    </Text>
                    <Text fz="sm" c="dimmed">
                        You will never miss important product updates, latest
                        news and community QA sessions. Our newsletter is once a
                        week, every Sunday.
                    </Text>

                    <div className={classes.controls}>
                        <TextInput
                            placeholder="Your email"
                            classNames={{
                                input: classes.input,
                                root: classes.inputWrapper,
                            }}
                        />
                        <Button
                            type="submit"
                            color={'yellow'}
                            className={classes.control}
                        >
                            Subscribe
                        </Button>
                    </div>
                </div>
                <Image src={image} className={classes.image} />
            </div>
        </Container>
    )
}

export default About
