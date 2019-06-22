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
                            <h2> Blogs </h2>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta in ipsum non facilisis.</p>
                        </div>
                        <div className="row">
                            <div className="col-md-6 blog-content">
                                <img src={blog1} className="img-blog img-fluid" alt="" />
                                <h3><a href="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta in ipsum non facilisis. Fusce pretium condimentum enim, non rhoncus nunc finibus eu. Morbi sed purus in diam commodo sagittis. Suspendisse feugiat, tellus vel efficitur viverra, turpis lorem malesuada lorem, eu posuere dui orci tempus libero. Phasellus mollis posuere ante a facilisis. Nulla blandit elit ac nunc feugiat mollis. Nulla congue purus non felis eleifend, id rhoncus lorem rutrum. Pellentesque pulvinar dignissim diam non dapibus. Nulla ultricies mi sed ultricies elementum.</p>
                                <button className="btn btn-primary">Read more...</button>
                            </div>
                            <div className="col-md-6 blog-content">
                                <img src={blog2} className="img-blog img-fluid" alt="" />
                                <h3><a href="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta in ipsum non facilisis. Fusce pretium condimentum enim, non rhoncus nunc finibus eu. Morbi sed purus in diam commodo sagittis. Suspendisse feugiat, tellus vel efficitur viverra, turpis lorem malesuada lorem, eu posuere dui orci tempus libero. Phasellus mollis posuere ante a facilisis. Nulla blandit elit ac nunc feugiat mollis. Nulla congue purus non felis eleifend, id rhoncus lorem rutrum. Pellentesque pulvinar dignissim diam non dapibus. Nulla ultricies mi sed ultricies elementum.</p>
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