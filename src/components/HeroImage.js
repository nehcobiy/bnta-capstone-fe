// Importing the Carousel component from react-bootstrap
import Carousel from 'react-bootstrap/Carousel';

// The HeroImage component represents a carousel of popular products
const HeroImage =  () => {
    return (
        <>
        {/* Title for the popular products section */}
        <h1 className="popular-heading"> Popular Products</h1>
        {/* Carousel component with fade effect and interval of 3 seconds */}
        <Carousel fade interval={3000}>
            {/* First carousel item */}
            <Carousel.Item>
                {/* Container for carousel images */}
                <div className="carousel-image-container">
                    {/* First image in the first carousel item */}
                    <div className="carousel-image1">
                        <img src={'/Images/heroImage1.jpg'} className={"hero-image"} alt="Slide 1A" width="397" height="600"/>
                    </div>
                    {/* Second image in the first carousel item */}
                    <div className="carousel-image1">
                        <img src={'/Images/heroImage2.png'} className={"hero-image"} alt="Slide 1B" width="431" height="600"/>
                    </div>
                </div>
                {/* Empty caption for the first carousel item */}
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            {/* Second carousel item */}
            <Carousel.Item>
                {/* Container for carousel images */}
                <div className="carousel-image-container">
                    {/* First image in the second carousel item */}
                    <div className="carousel-image2">
                        <img src={'/Images/heroImage3.jpg'} className={"hero-image"} alt="Slide 2A" width="600" height="600"/>
                    </div>
                    {/* Second image in the second carousel item */}
                    <div className="carousel-image2">
                        <img src={'/Images/heroImage4.png'} className={"hero-image"} alt="Slide 2B" width="370" height="600"/>
                    </div>
                </div>
                {/* Empty caption for the second carousel item */}
                <Carousel.Caption>
                </Carousel.Caption> 
            </Carousel.Item>
            {/* Third carousel item */}
            <Carousel.Item>
                {/* Container for carousel images */}
                <div className="carousel-image-container">
                    {/* First image in the third carousel item */}
                    <div className="carousel-image3">
                        <img src={'/Images/heroImage5.png'} className={"hero-image"} alt="Slide "/>
                    </div>
                    {/* Second image in the third carousel item */}
                    <div className="carousel-image3">
                        <img src={'/Images/heroImage6.png'} className={"hero-image"} alt="Slide 2B" width="370" height="600"/>
                    </div>
                </div>
                {/* Empty caption for the third carousel item */}
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            {/* Additional carousel items with similar structure */}
            {/* Fourth carousel item */}
            {/* Fifth carousel item */}
        </Carousel>
        </>
    );
}

// Exporting the HeroImage component
export default HeroImage;
