import React, { Component } from 'react'
import List from './Components/List'
import Title from './Components/Title'

class App extends Component {
  constructor() {
      super()
      this.state = {
          names: ['Johnny','Smith', 'Harry']
      }
      this.removeName = this.removeName.bind(this)
  }
  
  removeName(nameRemoved) {
      console.log(nameRemoved)
      this.setState((state) => ({
        names: state.names.filter( name => name !== nameRemoved)
      })   
      )
  }
  render() {
      return(
          <div>
              <Title title = {'Studentenliste'} />
              <List students = {this.state.names} onRemoveName = {this.removeName}  />
          </div>
      );
  }
}

export default App;