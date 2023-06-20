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
                    .filter((item) => item.category === 'Fresh Food')
                    .map(({ id, title, description, image, alt }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ArticlesListItem
                                id={id}
                                title={title}
                                description={description}
                                image={image}
                                alt={alt}
                            />
                        </Grid>
                    ))}
            </Grid>
        </Container>
    )
}

export default FreshFood
