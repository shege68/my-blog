import { Grid, Typography } from '@mui/material'
import ArticlesListItem from './ArticlesListItem'
import articlesArray from 'utils/articlesArray'

type Props = {}

const ArticlesList = (props: Props) => {
    return (
        <>
            <Typography
                component="h2"
                variant="h3"
                align="center"
                sx={{ marginBottom: '30px' }}
            ></Typography>
            <Grid container spacing={4}>
                {articlesArray.map(({ id, title, description, image }) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        <ArticlesListItem
                            id={id}
                            title={title}
                            description={description}
                            image={image}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default ArticlesList
