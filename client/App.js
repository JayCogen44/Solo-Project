import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/actions';

class App extends Component {
    
    componentDidMount(){
        this.props.getWeather(this.props.currentCity);
    }

    render(){

        const backgroundStyle = {
            background: `${this.props.gradientStart}`,
            background: `-moz-linear-gradient(45deg, ${this.props.gradientStart} 0%, ${this.props.gradientEnd} 100%)`,
            background: `-webkit-linear-gradient(45deg, ${this.props.gradientStart} 0%,${this.props.gradientEnd} 100%)`,
            background: `linear-gradient(45deg, ${this.props.gradientStart} 0%,${this.props.gradientEnd} 100%)`,
            filter: `progid:DXImageTransform.Microsoft.gradient( startColorstr=${this.props.gradientStart}
                    ,endColorstr=${this.props.gradientEnd},GradientType=1 )`
        }
        return (
            <div className='wrapper' style={backgroundStyle}>
                <form onSubmit={(e) => { e.preventDefault(); this.props.getWeather(this.props.currentCity) }}>
                    <input className='search' value={this.props.currentCity} onChange={this.props.updateCurrentCity} />
                    <button style={{ display: 'none' }} onClick={this.props.getWeather}></button>
                </form>
                <div className='weather-data'>
                    {this.props.currentTemp}<span className='deg'>&#176;</span>
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = ({reducer}) => ({
    currentCity: reducer.currentCity,
    currentTemp: reducer.currentTemp,
    gradientStart: reducer.gradientStart,
    gradientEnd: reducer.gradientEnd
});
  
const mapDispatchToProps = dispatch => ({
    getWeather: (city) => dispatch(actions.getWeather(city)),
    updateCurrentCity: (e) => dispatch(actions.updateCurrentCity(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);