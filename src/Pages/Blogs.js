import React, { Component } from 'react'
import blog1 from '../images/blog/blog1.jpg'
import blog2 from '../images/blog/blog2.jpg'

class Blogs extends Component {
    
    render() {
        return (
            <div>
                <section className="pt-4">
                    <div className="container">
                        <div className="text-center">
                            <h2>Blogs</h2>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lectus lacus, porta non rutrum quis, rhoncus eu elit.</p>
                        </div>
                        <div className="row">
                            <div className="col-md-6 blog-content">
                                <img src={blog1} className="img-blog img-fluid" alt="Curabitur imperdiet posuere interdum." />
                                <h3><a href="">Morbi volutpat ullamcorper orci bibendum pellentesque.</a></h3>
                                <p>Etiam eleifend ac augue a ultricies. Suspendisse quis pretium lectus. Donec ut libero semper, rutrum purus eu, sodales enim. Duis consectetur elit sit amet augue mollis dapibus. Nullam sed sem odio. Nam id venenatis augue. Nam blandit pellentesque bibendum. Proin non orci purus. Nunc a nulla non metus sodales posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                <button className="btn btn-primary">Read more...</button>
                            </div>
                            <div className="col-md-6 blog-content">
                                <img src={blog2} className="img-blog img-fluid" alt="Vestibulum et aliquet ex." />
                                <h3><a href="">Morbi volutpat ullamcorper orci bibendum pellentesque.</a></h3>
                                <p>Etiam eleifend ac augue a ultricies. Suspendisse quis pretium lectus. Donec ut libero semper, rutrum purus eu, sodales enim. Duis consectetur elit sit amet augue mollis dapibus. Nullam sed sem odio. Nam id venenatis augue. Nam blandit pellentesque bibendum. Proin non orci purus. Nunc a nulla non metus sodales posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                <button className="btn btn-primary">Read more...</button>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Blogs