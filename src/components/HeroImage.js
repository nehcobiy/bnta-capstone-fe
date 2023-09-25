import Carousel from 'react-bootstrap/Carousel';

const HeroImage =  () => {
    return (
        <Carousel fade interval={1000}>
            <Carousel.Item>
                <img src={'/Images/heroImage1.jpg'} className={"hero-image"}/>
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={'/Images/heroImage2.jpg'} className={"hero-image"}/>
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={'/Images/heroImage3.jpg'} className={"hero-image"}/>
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={'/Images/heroImage4.jpg'} className={"hero-image"}/>
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={'/Images/heroImage5.jpg'} className={"hero-image"}/>
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
export default HeroImage;