import React from 'react';
import './WeatherWidget.css';

class WeatherWidget extends React.Component {
    //this is to populate my city list with weather data
    populateList(weatherData, index) {
        return (
            <div className="Widget" data-test="BoxWidget" key={index}>
                <div className="Boxwidget">
                    <div className="Cardheader">{weatherData.cityName}</div>
                    <div className="Cardblock">
                        <p>Min - {weatherData.Min} &#8451;</p>
                        <p>Max - {weatherData.Max} &#8451;</p>
                    </div>
                    <div className="CardFooter">
                        <button type="button" className="ButtonPrimary" onClick={this.removeCityFromMyListClick.bind(this, weatherData.cityName)}>Remove</button>
                    </div>
                </div>
            </div >
        );
    }

    //removing city from my list
    removeCityFromMyListClick(cityName) {
        this.props.removeCityFromList(cityName);
    }

    render() {
        return (
            <div className="Row">
                {this.props.weatherData && this.props.weatherData.map(this.populateList, this)}
            </div>
        );
    }
}

export default WeatherWidget;