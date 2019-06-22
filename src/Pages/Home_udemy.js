import React, { Component } from 'react'
import Slider1 from '../images/slider-one.jpg'
import './main.css'

class Home extends Component {
    render() {
        return (
            <div>
                {/* Corousel section starts here */}
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Slider1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={Slider1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={Slider1} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                {/* Corousel section ends here */}
                <section id="feature">
                    <div className="container text-center pt-4">
                        <h2>Features</h2>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam laoreet nunc, eu gravida ex interdum in. Curabitur feugiat et mauris non scelerisque. </p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="feature-wrap">
                                    <i className="fa fa-laptop"></i>
                                    <h2>Fresh and Clean</h2>
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature-wrap">
                                    <i className="fa fa-comments"></i>
                                    <h2>Retina ready</h2>
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature-wrap">
                                    <i className="fa fa-heart"></i>
                                    <h2>Fresh and Clean</h2>
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature-wrap">
                                    <i className="fa fa-leaf"></i>
                                    <h2>Fresh and Clean</h2>
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature-wrap">
                                    <i className="fa fa-cogs"></i>
                                    <h2>Fresh and Clean</h2>
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature-wrap">
                                    <i className="fa fa-download"></i>
                                    <h2>Fresh and Clean</h2>
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="portfolio">
                    <div className="container text-center pt-4">
                        <h2>Portfolio</h2>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam laoreet nunc, eu gravida ex interdum in. Curabitur feugiat et mauris non scelerisque. </p>
                    </div>
                    <div className="container">
                        <input type="checkbox" id="pic-1" />
                        <label for="pic-1" class="lightbox"><img src="http://unsplash.it/800/600?image=1" /></label>
                        <input type="checkbox" id="pic-2" />
                        <label for="pic-2" class="lightbox"><img src="http://unsplash.it/800/600?image=20" /></label>
                        <input type="checkbox" id="pic-3" />
                        <label for="pic-3" class="lightbox"><img src="http://unsplash.it/800/600?image=21" /></label>
                        <input type="checkbox" id="pic-4" />
                        <label for="pic-4" class="lightbox"><img src="http://unsplash.it/800/600?image=42" /></label>
                        <input type="checkbox" id="pic-5" />
                        <label for="pic-5" class="lightbox"><img src="http://unsplash.it/800/600?image=48" /></label>
                        <input type="checkbox" id="pic-6" />
                        <label for="pic-6" class="lightbox"><img src="http://unsplash.it/800/600?image=60" /></label>
                        <input type="checkbox" id="pic-7" />
                        <label for="pic-7" class="lightbox"><img src="http://unsplash.it/800/600?image=201" /></label>
                        <input type="checkbox" id="pic-8" />
                        <label for="pic-8" class="lightbox"><img src="http://unsplash.it/800/600?image=7" /></label>
                        <input type="checkbox" id="pic-9" />
                        <label for="pic-9" class="lightbox"><img src="http://unsplash.it/800/600?image=119" /></label>
                        <input type="checkbox" id="pic-10" />
                        <label for="pic-10" class="lightbox"><img src="http://unsplash.it/800/600?image=180" /></label>
                        <input type="checkbox" id="pic-11" />
                        <label for="pic-11" class="lightbox"><img src="http://unsplash.it/800/600?image=96" /></label>
                        <input type="checkbox" id="pic-12" />
                        <label for="pic-12" class="lightbox"><img src="http://unsplash.it/800/600?image=24" /></label>
                        <div class="grid">
                            <label for="pic-1" class="grid-item"><img src="http://unsplash.it/400/300?image=1" /></label>
                            <label for="pic-2" class="grid-item"><img src="http://unsplash.it/400/300?image=20" /></label>
                            <label for="pic-3" class="grid-item"><img src="http://unsplash.it/400/300?image=21" /></label>
                            <label for="pic-4" class="grid-item"><img src="http://unsplash.it/400/300?image=42" /></label>
                            <label for="pic-5" class="grid-item"><img src="http://unsplash.it/400/300?image=48" /></label>
                            <label for="pic-6" class="grid-item"><img src="http://unsplash.it/400/300?image=60" /></label>
                            <label for="pic-7" class="grid-item"><img src="http://unsplash.it/400/300?image=201" /></label>
                            <label for="pic-8" class="grid-item"><img src="http://unsplash.it/400/300?image=7" /></label>
                            <label for="pic-9" class="grid-item"><img src="http://unsplash.it/400/300?image=119" /></label>
                            <label for="pic-10" class="grid-item"><img src="http://unsplash.it/400/300?image=180" /></label>
                            <label for="pic-11" class="grid-item"><img src="http://unsplash.it/400/300?image=96" /></label>
                            <label for="pic-12" class="grid-item"><img src="http://unsplash.it/400/300?image=24" /></label>
                        </div>
                    </div>
                </section>
                <section id="faqs">
                    <div className="container text-center pt-4">
                        <h2>Faqs</h2>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam laoreet nunc, eu gravida ex interdum in. Curabitur feugiat et mauris non scelerisque. </p>
                    </div>
                    <div className="container mt-10">

                        <div className="col-md-12">


                            <div className="panel-group" id="accordion3" role="tablist" aria-multiselectable="true">
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingOne3">
                                        <h4 className="panel-title">
                                            <a role="button" className="collapsed" data-toggle="collapse" data-parent="#accordion3" href="#collapseOne3" aria-expanded="true" aria-controls="collapseOne3">
                                                Section 1
                                    </a>
                                        </h4>
                                    </div>
                                    <div id="collapseOne3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne3">
                                        <div className="panel-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingTwo3">
                                        <h4 className="panel-title">
                                            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion3" href="#collapseTwo3" aria-expanded="false" aria-controls="collapseTwo3">
                                                Section 2
                                    </a>
                                        </h4>
                                    </div>
                                    <div id="collapseTwo3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo3">
                                        <div className="panel-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingThree3">
                                        <h4 className="panel-title">
                                            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion3" href="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
                                                Section 3
                                    </a>
                                        </h4>
                                    </div>
                                    <div id="collapseThree3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree3">
                                        <div className="panel-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <div className="spacer"></div>
            </div>
        );
    }
}
export default Home