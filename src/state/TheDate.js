import React from 'react';

class TheDate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      count: 0
    }
    this.handleButtonClick = this.handleButtonClick(this)
    console.log('constructor')
  }
  componentDidMount() {
    console.log('componentDidMount')
    this.interval = setInterval(() => {
      console.log('setInterval')
      this.setState({
        datetime: new Date()
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    console.log('render')
    return (
    <div>{this.state.datetime.toLocalString()}</div>
    )
  }
}

export default TheDate;