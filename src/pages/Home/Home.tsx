import { Container } from '@mui/system'
import ArticlesList from 'components/Articles/ArticlesList'
import Reviews from 'components/Reviews/Reviews'
import Carousel from 'Container/Carousel/Carousel'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <Carousel />
            <Container>
                <ArticlesList />
                <Reviews />
            </Container>
        </>
    )
}
export default Home
