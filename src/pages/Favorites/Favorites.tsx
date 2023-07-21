import { Text, Title } from '@mantine/core'
import { Container, Grid } from '@mui/material'
import ArticlesListItem from 'components/Articles/ArticlesListItem'
import { useAppSelector } from 'redux/hooks'
import articlesArray, { Articles, getArticlesObject } from 'utils/articlesArray'

type Props = {
    articlesObject?: {
        [id: number]: Articles
    }
}

const Favorites = ({
    articlesObject = getArticlesObject(articlesArray),
}: Props) => {
    const likedId = useAppSelector((state) => state.articleLikeState)

    const arrayIdLiked = Object.entries(likedId).reduce((newArr: any, arr) => {
        if (arr[1] === true) {
            newArr.push(arr[0])
        }
        return newArr
    }, [])

    return (
        <Container sx={{ padding: '30px 20px', minHeight: '50rem' }}>
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
                {arrayIdLiked.map((idLiked: number) => (
                    <Grid item xs={12} sm={6} md={4} key={idLiked}>
                        <ArticlesListItem
                            id={articlesObject[idLiked].id}
                            title={articlesObject[idLiked].title}
                            subheader={articlesObject[idLiked].subheader}
                            description={articlesObject[idLiked].description}
                            image={articlesObject[idLiked].image}
                            alt={articlesObject[idLiked].alt}
                            link={articlesObject[idLiked].link}
                            avatar={articlesObject[idLiked].avatar}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Favorites
