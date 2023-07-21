import { Container } from '@mui/material'
import Reviews from 'components/Reviews/Reviews'
import { useParams } from 'react-router-dom'
import articlesArray, { Articles, getArticlesObject } from 'utils/articlesArray'
import './Article.scss'

type Props = {
    articlesObject?: {
        [id: number]: Articles
    }
}

const Article = ({
    articlesObject = getArticlesObject(articlesArray),
}: Props) => {
    const { id } = useParams()

    const complete = articlesObject[parseInt(id!)].completeArticle

    return (
        <Container>
            <div dangerouslySetInnerHTML={{ __html: complete! }}></div>
            <Reviews />
        </Container>
    )
}
export default Article
