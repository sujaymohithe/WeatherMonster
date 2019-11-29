import commonApi from '../api/commonApi';
import * as actionTypes from './actionTypes';

//Creating own list of cities
const initialState = {
    cities: ["Berlin", "Munich", "Frankfurt", "Stuttgart", "Hamburg", "Cologne", "Dusseldorf", "Bonn", "Leipzig", "Darmstadt"]
};

function receiveCityListData(cities) {
    return {
        type: actionTypes.GET_CITIES,
        list: cities
    }
}

//currying the dispatch method of the store to get all cities on page load
export function getCities() {
    return function (dispatch) {
        dispatch(receiveCityListData(initialState.cities));
    };
}

function saveCityToList(data) {
    return {
        type: actionTypes.ADD_CITY_TO_LIST,
        cityWeatherData: {
            cityName: data.name,
            Min: data.main.temp_min,
            Max: data.main.temp_max
        }
    }
}

//currying the dispatch method of the store for invocation at a later stage when the user interacts with the component to add a city to list
export function addCityToList(searchTxt) {
    return function (dispatch) {
        return commonApi.getWeatherDataForACity(searchTxt).then(data => {
            dispatch(saveCityToList(data));
        }).catch(error => {
            throw (error);
        });
    }
}

function deleteCityFromList(cityName) {
    return {
        type: actionTypes.REMOVE_CITY_FROM_LIST,
        cityName: cityName
    }
}

//currying the dispatch method of the store for invocation at a later stage when the user interacts with the component to remove a city from list
export function removeCityFromList(city) {
    return function (dispatch) {
        dispatch(deleteCityFromList(city));
    };
}

