import React, {Component} from 'react'
import Service1 from '../images/services/services1.png'
import Service2 from '../images/services/services2.png'
 
class Services extends Component {
    render() {
        return(
            <div>
                <section id="services" className="p-4">
                    <div className="container">
                        <div className="text-center">
                            <h2>Our Services</h2>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta in ipsum non facilisis.</p>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="media service-wrap">
                                    <div>
                                        <img className="pr-3" src={Service1} alt="" />
                                    </div>
                                    <div className="media-body">
                                        <h3 className="media-heading">Digital Marketing</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="media service-wrap">
                                    <div>
                                        <img className="pr-3" src={Service2} alt="" />
                                    </div>
                                    <div className="media-body">
                                        <h3 className="media-heading">Email Marketing</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="media service-wrap">
                                    <div>
                                        <img className="pr-3" src={Service1} alt="" />
                                    </div>
                                    <div className="media-body">
                                        <h3 className="media-heading">Digital Marketing</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                            </div>
 
                            <div className="col-md-4">
                                <div className="media service-wrap">
                                    <div>
                                        <img className="pr-3" src={Service1} alt="" />
                                    </div>
                                    <div className="media-body">
                                        <h3 className="media-heading">Digital Marketing</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="media service-wrap">
                                    <div>
                                        <img className="pr-3" src={Service1} alt="" />
                                    </div>
                                    <div className="media-body">
                                        <h3 className="media-heading">Digital Marketing</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="media service-wrap">
                                    <div>
                                        <img className="pr-3" src={Service1} alt="" />
                                    </div>
                                    <div className="media-body">
                                        <h3 className="media-heading">Digital Marketing</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Services