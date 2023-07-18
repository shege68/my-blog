import { Text, Title } from '@mantine/core'
import { Container, Grid, Typography } from '@mui/material'
import ArticlesListItem from 'components/Articles/ArticlesListItem'
import { useState } from 'react'
import { useAppSelector } from 'redux/hooks'
import articlesArray from 'utils/articlesArray'
import getArticlesObject from 'utils/articlesArray'

type Props = {}

const Favorites = (props: Props) => {
    const [newArticlesArray, setNewArticlesArray] = useState(articlesArray)

    function addArticlesToFavorites(newLiked: boolean) {
        setNewArticlesArray(
            newArticlesArray.map((item) => {
                return {
                    ...item,
                    liked: newLiked,
                }
            })
        )
    }

    const likedId = useAppSelector((state) => state.articleLikeState)

    return (
        <Container sx={{ padding: '30px 20px' }}>
            <Title order={1} align="center" mb={10}>
                Favorites
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
                {newArticlesArray
                    .filter((item) => item.liked === true)
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

export default Favorites
