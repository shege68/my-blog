import { Title, Text } from '@mantine/core'
import { Container, Grid } from '@mui/material'
import ArticlesListItem from 'components/Articles/ArticlesListItem'
import articlesArray from 'utils/articlesArray'

type Props = {}

const HealthyEating = (props: Props) => {
    return (
        <Container sx={{ padding: '30px 20px' }}>
            <Title order={1} align="center" mb={10}>
                Healthy Eating
            </Title>
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
            </Text>
            <Grid container spacing={4}>
                {articlesArray
                    .filter((item) => item.category === 'Healthy Eating')
                    .map(
                        ({
                            id,
                            title,
                            subheader,
                            description,
                            image,
                            alt,
                            link,
                            avatar,
                        }) => (
                            <Grid item xs={12} sm={6} md={4} key={id}>
                                <ArticlesListItem
                                    id={id}
                                    title={title}
                                    subheader={subheader}
                                    description={description}
                                    image={image}
                                    alt={alt}
                                    link={link}
                                    avatar={avatar}
                                />
                            </Grid>
                        )
                    )}
            </Grid>
        </Container>
    )
}

export default HealthyEating
