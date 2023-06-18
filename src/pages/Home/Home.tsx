import { Container } from '@mui/system'
import ArticlesList from 'components/Articles/ArticlesList'
import Carousel from 'Container/Carousel/Carousel'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <Carousel />
            <Container>
                <ArticlesList />
            </Container>
        </>
    )
}
export default Home
