import React, { Component } from 'react'
import Slider1 from '../images/slider-one.jpg'
import './main.css'

class Home extends Component {
    render() {
        return (
            <div>
                {/* Carousel section starts here */}
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={Slider1} class="d-block w-100" alt="Unser Team" />
                        </div>
                        <div class="carousel-item">
                            <img src={Slider1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={Slider1} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                {/* Carousel section ends here */}
                <section id="feature">
                    <div className="container text-center pt-4">
                        <h2>Features</h2>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ipsum vitae ex tempus sagittis vel eu magna. Quisque nunc nulla, sollicitudin in tincidunt eu, condimentum at ante.</p>
                    </div>
                    <div className="Container">
                        <div className="row">
                            <div className="col-md-4">
                                <div ClassName="feature-wrap">
                                    <i className="fas fa-laptop">
                                        <h2>Fresh and Clean</h2>
                                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                                    </i>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div ClassName="feature-wrap">
                                    <i className="fas fa-comments">
                                        <h2>Fresh and Clean</h2>
                                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                                    </i>
                                </div>
                            </div><div className="col-md-4">
                                <div ClassName="feature-wrap">
                                    <i className="fas fa-leaf">
                                        <h2>Fresh and Clean</h2>
                                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                                    </i>
                                </div>
                            </div><div className="col-md-4">
                                <div ClassName="feature-wrap">
                                    <i className="fas fa-cogs">
                                        <h2>Fresh and Clean</h2>
                                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                                    </i>
                                </div>
                            </div><div className="col-md-4">
                                <div ClassName="feature-wrap">
                                    <i className="fas fa-download">
                                        <h2>Fresh and Clean</h2>
                                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                                    </i>
                                </div>
                            </div><div className="col-md-4">
                                <div ClassName="feature-wrap">
                                    <i className="fas fa-heart">
                                        <h2>Fresh and Clean</h2>
                                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home