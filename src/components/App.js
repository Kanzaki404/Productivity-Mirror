import '../assets/css/App.css'
import React from 'react'
import MyDate from './dates' // import date component
import ToDo from './ToDo' // import date component
import MyWeather from './weather'
class App extends React.Component {
  constructor (props) {
    super(props) // inherits react class above
    this.state = { //
      date: ''
    }
  }

  render () {
    return (
      <div className='MainAppContainer'>

        <div className='date'>
          <MyDate />
        </div>
        <div className='tasks'>
          <ToDo />
        </div>
        <div>
          <MyWeather />
        </div>
      </div>
    )
  }
}

export default App
