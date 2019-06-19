import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'

class App extends Component {
    constructor() {
        super()

    }

    render() {
        
        return (
            <div className="">
                <Navbar />
                <Home />
                <About />
                <Services />
                <Blogs />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default App;