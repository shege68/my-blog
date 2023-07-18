import { Container, Grid, Typography } from '@mui/material'
import ArticlesListItem from 'components/Articles/ArticlesListItem'
import articlesArray from 'utils/articlesArray'

type Props = {}

const FreshFood = (props: Props) => {
    return (
        <Container>
            <Typography
                component="h2"
                variant="h3"
                align="center"
                sx={{ marginBottom: '30px' }}
            ></Typography>
            <Grid container spacing={4}>
                {articlesArray
                    .filter((item) => item.category === 'Restaurant')
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

export default FreshFood
