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
      this.state = {
          names: []
      }
      this.removeName = this.removeName.bind(this)
      console.log('constructor')
  }
  removeName(nameRemoved) {
      console.log(nameRemoved)
      this.setState((state) => ({
        names: state.names.filter( name => name !== nameRemoved)
      })   
      )
  }
  
  render() {
      console.log('render')
      return(
          <div className = "">
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

function simulateFetchFromDatabase() {
    return ['Johnny','Smith', 'Harry']
}

export default App;