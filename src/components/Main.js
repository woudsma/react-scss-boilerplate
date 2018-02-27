import React, { Component } from 'react'
import classNames from 'classnames'
import '../css/Main.css'

class Main extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      maximized: false,
    }
  }

  handleClick() {
    this.setState({ maximized: !this.state.maximized })
  }

  render() {
    const mainClass = classNames('Main', {
      maximized: this.state.maximized,
    })

    return (
      <div className={mainClass} onClick={this.handleClick}>
        <h1>Hello World!</h1>
        <p>
          Maximized: {`${this.state.maximized}`}<br />
          Click to {this.state.maximized ? 'minimize' : 'maximize'}.
        </p>
      </div>
    )
  }
}

export default Main
