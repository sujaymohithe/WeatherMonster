import React from 'react';
import CityList from '../city/CityList';
import { getCities, addCityToList, removeCityFromList } from '../../actions/WeatherHomeActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import WeatherWidget from './WeatherWidget';

class WeatherHome extends React.Component {
    componentDidMount() {
        this.props.getCities();
    }

    render() {
        return (
            <>
                <CityList cities={this.props.cities} weatherData={this.props.weatherDataList} addCityToList={this.props.addCityToList} />
                <WeatherWidget weatherData={this.props.weatherDataList} removeCityFromList={this.props.removeCityFromList}/>
            </>
        );
    }
}

//method that copies part of the state to the props of this component.
function mapStateToProps(state) {
    return {
        cities: state.WeatherHomeReducer.cities,
        weatherDataList: state.WeatherHomeReducer.weatherDataList
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getCities: getCities,
        addCityToList: addCityToList,
        removeCityFromList: removeCityFromList
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherHome);
