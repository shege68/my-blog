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
    console.log('🚀 ~ file: Article.tsx:17 ~ id:', id)
    const complete = articlesObject[parseInt(id!)].completeArticle
    console.log('🚀 ~ file: Article.tsx:15 ~ articlesObject:', articlesObject)
    console.log('🚀 ~ file: Article.tsx:20 ~ complete:', complete)
    return (
        <Container>
            <div dangerouslySetInnerHTML={{ __html: complete! }}></div>
            <Reviews />
        </Container>
    )
}
export default Article
