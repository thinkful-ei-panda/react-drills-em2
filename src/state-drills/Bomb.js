import React from 'react';

export default class Bomb extends React.Component {
  
  state = {
    count: 0
  };
  

  componentDidMount() {
    console.log('component did mount')
    this.interval = setInterval(() => {
      console.log('set interval')
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }


  renderDisplay() {
    const { count } = this.state

    if (count >= 8) {
      clearInterval(this.interval)
      return 'BOOM!!!'
    } else if (count % 2) {
      return 'tick'
    } else {
      return 'tock'
    }
  }




  render() {
  
    return (

      <div className='Bomb'>

        {this.renderDisplay()}

      </div>

    )
  }
}