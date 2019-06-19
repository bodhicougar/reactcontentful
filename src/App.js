import React, { Component } from 'react'
import List from './Practice/List'
import Title from './Practice/Title'
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
  componentDidMount() {
        const data = simulateFetchFromDatabase()
        this.setState({
            names: data
        })
        console.log('ComponentDidMount')
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

// <Title title = {'Studentenliste'} />
// <List students = {this.state.names} onRemoveName = {this.removeName}  />

function simulateFetchFromDatabase() {
    return ['Johnny','Smith', 'Harry']
}

export default App;