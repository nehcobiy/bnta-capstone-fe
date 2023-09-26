import Carousel from 'react-bootstrap/Carousel';

const HeroImage =  () => {
    return (
        <>
        <h1 class="popular-heading"> Popular Products</h1>
        <Carousel fade interval={3000}>
            <Carousel.Item>
                <div className="carousel-image-container">
                    <div className="carousel-image1">
                        <img src={'/Images/heroImage1.jpg'} className={"hero-image"} alt="Slide 1A" width="397" height="600"/>
                    </div>
                    <div className="carousel-image1">
                        <img src={'/Images/heroImage2.png'} className={"hero-image"} alt="Slide 1B" width="431" height="600"/>
                    </div>
                </div>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carousel-image-container">
                    <div className="carousel-image2">
                        <img src={'/Images/heroImage3.jpg'} className={"hero-image"} alt="Slide 2A" width="600" height="600"/>
                    </div>
                    <div className="carousel-image2">
                        <img src={'/Images/heroImage4.png'} className={"hero-image"} alt="Slide 2B" width="370" height="600"/>
                    </div>
                </div>
                <Carousel.Caption>
                </Carousel.Caption> 
            </Carousel.Item>
            <Carousel.Item>
                <div className="carousel-image-container">
                    <div className="carousel-image3">
                        <img src={'/Images/heroImage5.png'} className={"hero-image"} alt="Slide "/>
                    </div>
                    <div className="carousel-image3">
                        <img src={'/Images/heroImage6.png'} className={"hero-image"} alt="Slide 2B" width="370" height="600"/>
                    </div>
                </div>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carousel-image-container">
                    <div className="carousel-image4">
                        <img src={'/Images/heroImage7.png'} className={"hero-image"} alt="Slide "/>
                    </div>
                    <div className="carousel-image4">
                        <img src={'/Images/heroImage8.png'} className={"hero-image"} alt="Slide 2B" width="291" height="450"/>
                    </div>
                </div>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carousel-image-container">
                    <div className="carousel-image5">
                        <img src={'/Images/heroImage9.png'} className={"hero-image"} alt="Slide "/>
                    </div>
                    <div className="carousel-image5">
                        <img src={'/Images/heroImage10.png'} className={"hero-image"} alt="Slide 2B" width="291" height="450"/>
                    </div>
                </div>
                <Carousel.Caption>
                </Carousel.Caption>

            </Carousel.Item>
        </Carousel>
        </>
    );
}
export default HeroImage;