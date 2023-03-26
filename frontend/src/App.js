import React from 'react';
import './App.css';
import WeatherItem from './components/Weather';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': [],
      'weather': '',
    }
  }

  componentDidMount() {
    const weather = {
      'city': 'Surgut',
      'cloudness': 1,
      'condition': 'light-rain',
      'daytime': 'd',
      'feels_like': -1,
      'humidity': 89,
      'icon': 'https://yastatic.net/weather/i/icons/funky/dark/ovc_-ra.svg',
      'obs_time': 1679821200,
      'prec_prob': 90,
      'prec_strength': 0.25,
      'prec_type': 1,
      'pressure_mm': 742,
      'pressure_pa': 989,
      'season': 'spring',
      'soil_moisture': 0.54,
      'soil_temp': -1,
      'source': 'station',
      'temp': 4,
      'uptime': '2023-03-26 14:21:32',
      'uv_index': 1,
      'wind_dir': 's',
      'wind_gust': 9.4,
      'wind_speed': 4.7
    }

    this.setState(
      {
        'weather': weather
      }
    )
  }

  render() {
    return (
      <div>
        <WeatherItem weather={this.state.weather} />
      </div >
    )
  }
}


export default App;
