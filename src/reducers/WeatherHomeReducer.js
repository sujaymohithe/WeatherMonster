import * as actionTypes from '../actions/actionTypes'

export function WeatherHomeReducer(state = { cities: [], weatherDataList: [] }, action) {
    switch (action.type) {
        case actionTypes.GET_CITIES:
            return {
                ...state,
                cities: action.list
            };
        case actionTypes.ADD_CITY_TO_LIST:
            let newList = [action.cityWeatherData, ...state.weatherDataList];
            return {
                ...state,
                weatherDataList: newList.sort(function (a, b) { return b.Max - a.Max })
            };
        case actionTypes.REMOVE_CITY_FROM_LIST:
            let filterList = state.weatherDataList.filter(item => {
                if (item.cityName === action.cityName) {
                    return false;
                } else {
                    return true;
                }
            });
            return {
                ...state,
                weatherDataList: filterList.sort(function (a, b) { return b.Max - a.Max })
            };
        default:
            return state;
    }
}