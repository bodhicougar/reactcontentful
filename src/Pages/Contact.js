import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (
            <div>
                <section className="pt-4">
                    <div className="container">
                        <div className="text-center">
                            <h2>Drop your message</h2>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="contact-form">
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfmmej4liB0DWvxPifQv3jKPDP0FRqjo2Gevfm2Vboq69nqLA/viewform?embedded=true" width="640" height="627" frameborder="0" marginheight="0" marginwidth="0">Wird geladen...</iframe>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact