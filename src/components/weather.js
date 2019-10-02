import React from 'react'
const request = require('request')
class MyWeather extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      url: 'https://weather.api.here.com/weather/1.0/report.json?app_id=ZUPjniuCakZRSEMb4Vxy&app_code=emo8G7K7fSdKgXpL3kUn4Q&product=observation&name=Gothenburg'

    }
  }

  componentDidMount () {
    // const that = this
    request.get(this.state.url, function (error, response, body) {
      console.log(error)
      console.log(response)
      const result = JSON.parse(body)
      console.log(result)
    })
  }

  render () {
    return (
      <div />
    )
  }
}

export default MyWeather
