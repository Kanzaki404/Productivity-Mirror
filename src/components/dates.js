import '../assets/css/App.css'
import React from 'react'

class MyDate extends React.Component {
  constructor (props) {
    super(props) // inherits react class above
    this.state = { //
      time: new Date()
    }
  }

  componentDidMount () {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState({
      time: new Date()
    })
  }

  render () {
    // var options = { year: 'numeric', month: 'long', day: 'numeric' }
    return (
      <div className='dateAndTime'>
        <p id='time'>{this.state.time.toLocaleTimeString()}</p>
        <p id='date'>{this.state.time.toLocaleDateString('ja-JP')}</p>
      </div>
    )
  }
}

export default MyDate
