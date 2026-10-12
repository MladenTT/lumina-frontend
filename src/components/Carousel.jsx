import './Carousel.css'

const Carousel = () => {
    return (
        <div className="carousel-container">
            <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button> 
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button> 
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4" className="active" aria-current="true"></button> 
                </div> 
                <div className="carousel-inner">
                    
                    {/* Prva slika */}
                    <div className="carousel-item"> 
                        <img src="/images/carousel/carousel1.png" className="d-block w-100" alt="Slide 1" />
                        <div className="container"> 
                            <div className="carousel-caption text-start">
                                <h4>Slika headline.</h4> 
                                <p>Some representative placeholder content for the first slide of the carousel.</p>          </div> 
                        </div> 
                    </div>

                    {/* Druga slika */}
                    <div className="carousel-item"> 
                        <img src="/images/carousel/carousel2.png" className="d-block w-100" alt="Slide 2" />
                        <div className="container"> 
                            <div className="carousel-caption">
                                <h4>Another example headline.</h4> 
                                <p>Some representative placeholder content for the second slide of the carousel.</p>
                            </div> 
                        </div> 
                    </div> 

                    {/* Treća slika (aktivna) */}
                    <div className="carousel-item active">
                        <img src="/images/carousel/carousel3.jpg" className="d-block w-100" alt="Slide 3" />
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h4>One more for good measure.</h4>
                                <p>Some representative placeholder content for the third slide of this carousel.</p>
                            </div> 
                        </div> 
                    </div>

                     {/* Cetvrta slika */}
                    <div className="carousel-item"> 
                        <img src="/images/carousel/carousel4.jpg" className="d-block w-100" alt="Slide 4" />
                        <div className="container"> 
                            <div className="carousel-caption">
                                <h4>Another example headline.</h4> 
                                <p>Some representative placeholder content for the second slide of the carousel.</p>
                            </div> 
                        </div> 
                    </div> 

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button> 
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span> 
                </button>
            </div>
        </div>
    );
}

export default Carousel;