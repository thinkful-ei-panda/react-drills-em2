import React from 'react';

class HelloWorld extends React.Component {
  // Set the inital state
  state = {
    who: 'world',
  }


  render() {
    
    return (
      
      <div className='HelloWorld'>
        <p>Hello, {this.state.who}!</p>

        <button 
        onClick={() => this.setState({ who: 'world' })}>
          World
        </button>

        <button 
        onClick={() => this.setState({ who: 'friend' })}>
          Friend
        </button>

        <button 
        onClick={() => this.setState({ who: 'React' })}>
          React
        </button>

      </div>
    )
  }
}


export default HelloWorld;