import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './Carousel.scss'

type Props = {}

const Carousel = (props: Props) => {
    const images = [
        '/images/slide1.jpeg',
        '/images/slide2.jpeg',
        'images/slide3.jpeg',
    ]

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${images[0]})` }}>
                    <span>5 Best Outdoor Restaurants</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${images[1]})` }}>
                    <span>Baked Garlic Parmesan Chicken</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${images[2]})` }}>
                    <span>20 Most unusual dinners</span>
                </div>
            </div>
        </Slide>
    )
}

export default Carousel
