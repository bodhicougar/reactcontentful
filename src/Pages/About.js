import React, { Component } from 'react'
import client from './Client'
import BlackLoader from '../images/black-loader.gif'

class About extends Component {
    constructor() {
        super()
        this.state = {aboutPage: []}
    }
    componentDidMount() {
        client.getEntries({
            'content_type' : 'about'
        }).then((entries) => {
            this.setState({aboutpage: entries.items[0]}) // 200
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h2 className="text-center">About Us</h2>
                    {this.state.aboutPage.length === 0 ?
                        <div align="center" className="pt-5"> <img src={BlackLoader} alt="Loader" /></div>
                        :
                        <p>{this.state.aboutpage.fields.aboutDescription}</p>
                    }
                </div>
            </div>
                );
            }
        }
        
export default About