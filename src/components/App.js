import React, { Component } from 'react'
import '../css/App.css'

import Main from './Main'
import Background from './Background'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Background />
      </div>
    )
  }
}

export default App
