import React, { Component } from 'react'
import Service1 from '../images/services/services1.png'
import Service2 from '../images/services/services2.png'
import Service3 from '../images/services/services3.png'
import Service4 from '../images/services/services4.png'
import Service5 from '../images/services/services5.png'
import Service6 from '../images/services/services6.png'

class Services extends Component {
    render() {
        return (
            <div>
                <section id="services" className="p-4">
                    <div className="container">
                        <div className="text-center">
                            <h2>Our Services</h2>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget lobortis lorem. Maecenas gravida lacus mi, ac faucibus dui ultrices vitae.</p>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="service-wrap">
                                    <div>
                                        <img className="pr-3" src={Service1} alt="" />
                                    </div>
                                    <div className="media-body">
                                        <h3 className="media-heading">Digital Marketing</h3>
                                        <p>Pellentesque at tellus ut arcu ultrices viverra.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service-wrap">
                                    <div>
                                        <img className="pr-3" src={Service2} alt="" />
                                    </div>
                                    <div className="media-body">
                                        <h3 className="media-heading">E-mail Marketing</h3>
                                        <p>Pellentesque at tellus ut arcu ultrices viverra.</p>
                                    </div>
                                </div>
                            </div><div className="col-md-4">
                                <div className="service-wrap">
                                    <div>
                                        <img className="pr-3" src={Service3} alt="" />
                                    </div>
                                    <div className="media-body">
                                        <h3 className="media-heading">Content Marketing</h3>
                                        <p>Pellentesque at tellus ut arcu ultrices viverra.</p>
                                    </div>
                                </div>
                            </div><div className="col-md-4">
                                <div className="service-wrap">
                                    <div>
                                        <img className="pr-3" src={Service4} alt="" />
                                    </div>
                                    <div className="media-body">
                                        <h3 className="media-heading">PPC Marketing</h3>
                                        <p>Pellentesque at tellus ut arcu ultrices viverra.</p>
                                    </div>
                                </div>
                            </div><div className="col-md-4">
                                <div className="service-wrap">
                                    <div>
                                        <img className="pr-3" src={Service5} alt="" />
                                    </div>
                                    <div className="media-body">
                                        <h3 className="media-heading">SMO Marketing</h3>
                                        <p>Pellentesque at tellus ut arcu ultrices viverra.</p>
                                    </div>
                                </div>
                            </div><div className="col-md-4">
                                <div className="service-wrap">
                                    <div>
                                        <img className="pr-3" src={Service6} alt="" />
                                    </div>
                                    <div className="media-body">
                                        <h3 className="media-heading">SEO Marketing</h3>
                                        <p>Pellentesque at tellus ut arcu ultrices viverra.</p>
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