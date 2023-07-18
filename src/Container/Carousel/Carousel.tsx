import { Link } from 'react-router-dom'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './Carousel.scss'

type Props = {}

const Carousel = (props: Props) => {
    const images = [
        '/images/healthy-eating1.jpeg',
        '/images/healthy-eating5.jpeg',
        '/images/healthy-eating6.jpeg',
        '/images/restaurant2.jpeg',
        '/images/recipes4.jpeg',
        '/images/recipes5.jpeg',
    ]

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${images[0]})` }}>
                    <Link className="link-carousel" to={`/article/7`}>
                        Everything you need to know about
                    </Link>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${images[1]})` }}>
                    <Link className="link-carousel" to={`/article/11`}>
                        Post Format: Gallary
                    </Link>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${images[2]})` }}>
                    <Link className="link-carousel" to={`/article/13`}>
                        Kinds of fresh food
                    </Link>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${images[3]})` }}>
                    <Link className="link-carousel" to={`/article/9`}>
                        Free WiFi Coffee Shop
                    </Link>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${images[4]})` }}>
                    <Link className="link-carousel" to={`/article/16`}>
                        Table decoration trends
                    </Link>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${images[5]})` }}>
                    <Link className="link-carousel" to={`/article/17`}>
                        20 Most unusual dinners
                    </Link>
                </div>
            </div>
        </Slide>
    )
}

export default Carousel
