import { Grid, Typography } from '@mui/material'
import ArticlesListItem from './ArticlesListItem'
import articlesArray from 'utils/articlesArray'

type Props = {}

const ArticlesList = (props: Props) => {
    return (
        <>
            <Typography
                component="h2"
                variant="h4"
                align="center"
                sx={{ margin: '30px 0' }}
            >
                Articles
            </Typography>
            <Grid container spacing={4}>
                {articlesArray.map(
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
        </>
    )
}

export default ArticlesList
