import {
    Paper,
    Text,
    TextInput,
    Textarea,
    Button,
    Group,
    SimpleGrid,
    createStyles,
    rem,
    Container,
    Image,
    Title,
    TypographyStylesProvider,
} from '@mantine/core'

import bg from './bg.jpeg'
import { ContactIconsList } from './ContactIconsList'

const useStyles = createStyles((theme) => {
    const BREAKPOINT = theme.fn.smallerThan('sm')

    return {
        wrapper: {
            display: 'flex',
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[8]
                    : theme.white,
            borderRadius: theme.radius.lg,
            padding: rem(4),
            border: `${rem(1)} solid ${
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[8]
                    : theme.colors.gray[2]
            }`,

            [BREAKPOINT]: {
                flexDirection: 'column',
            },
        },

        form: {
            boxSizing: 'border-box',
            flex: 1,
            padding: theme.spacing.xl,
            paddingLeft: `calc(${theme.spacing.xl} * 2)`,
            borderLeft: 0,

            [BREAKPOINT]: {
                padding: theme.spacing.md,
                paddingLeft: theme.spacing.md,
            },
        },

        fields: {
            marginTop: rem(-12),
        },

        fieldInput: {
            flex: 1,

            '& + &': {
                marginLeft: theme.spacing.md,

                [BREAKPOINT]: {
                    marginLeft: 0,
                    marginTop: theme.spacing.md,
                },
            },
        },

        fieldsGroup: {
            display: 'flex',

            [BREAKPOINT]: {
                flexDirection: 'column',
            },
        },

        contacts: {
            boxSizing: 'border-box',
            position: 'relative',
            borderRadius: theme.radius.lg,
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: `${rem(1)} solid transparent`,
            padding: theme.spacing.xl,
            flex: `0 0 ${rem(280)}`,

            [BREAKPOINT]: {
                marginBottom: theme.spacing.sm,
                paddingLeft: theme.spacing.md,
            },
        },

        title: {
            marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,

            [BREAKPOINT]: {
                marginBottom: theme.spacing.xl,
            },
        },

        control: {
            [BREAKPOINT]: {
                flex: 1,
            },
        },
    }
})

type Props = {}

const Contact = (props: Props) => {
    const { classes } = useStyles()

    return (
        <Container sx={{ padding: '30px 20px' }}>
            <Title order={1} align="center" mb={10}>
                Contact Us
            </Title>
            <Image
                radius="md"
                src="/images/contact-us.jpeg"
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
                    <h3>Contact information</h3>
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
            <Paper shadow="md" radius="lg">
                <div className={classes.wrapper}>
                    <div className={classes.contacts}>
                        <Text
                            fz="lg"
                            fw={700}
                            className={classes.title}
                            c="#fff"
                        >
                            Contact information
                        </Text>

                        <ContactIconsList variant="white" />
                    </div>

                    <form
                        className={classes.form}
                        onSubmit={(event) => event.preventDefault()}
                    >
                        <Text fz="lg" fw={700} className={classes.title}>
                            Get in touch
                        </Text>

                        <div className={classes.fields}>
                            <SimpleGrid
                                cols={2}
                                breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
                            >
                                <TextInput
                                    label="Your name"
                                    placeholder="Your name"
                                />
                                <TextInput
                                    label="Your email"
                                    placeholder="hello@mantine.dev"
                                    required
                                />
                            </SimpleGrid>

                            <TextInput
                                mt="md"
                                label="Subject"
                                placeholder="Subject"
                                required
                            />

                            <Textarea
                                mt="md"
                                label="Your message"
                                placeholder="Please include all relevant information"
                                minRows={3}
                            />

                            <Group position="right" mt="md">
                                <Button
                                    type="submit"
                                    color={'yellow'}
                                    className={classes.control}
                                >
                                    Send message
                                </Button>
                            </Group>
                        </div>
                    </form>
                </div>
            </Paper>
        </Container>
    )
}

export default Contact
