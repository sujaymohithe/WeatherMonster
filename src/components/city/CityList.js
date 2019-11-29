import React from 'react';
import toastr from 'toastr';
import './CityList.css';

class CityList extends React.Component {

    //check user enters or selects a value as in list and nothing out of the drop down list
    validateCityInput(selectedInputCity) {
        let index = this.props.cities.findIndex(item => selectedInputCity.toLowerCase() === item.toLowerCase());
        if (index === -1) {
            return false;
        }
        return true;
    }

    //check if city when trying to add to list is already present in list
    validateIfCityIsAlreadyInList(selectedInputCity) {
        let index = this.props.weatherData.findIndex(item => selectedInputCity.toLowerCase() === item.cityName.toLowerCase());
        if (index === -1) {
            return false;
        }
        return true;
    }

    //this function is used to add a city to my list and get weather data simultaneously
    addCityToMyListClick() {
        let selectedInputCity = "";
        //not using state hooks here because element inpCity is associated with html5 datalist element and drop down select auto sets value into input element
        var inputCity = document.getElementById('inpCity');
        if (typeof (inputCity) != 'undefined' && inputCity != null) {
            selectedInputCity = inputCity.value;
            //clear the text box after search click
            inputCity.value = "";
        }
        if (this.validateCityInput(selectedInputCity)) {
            if (this.validateIfCityIsAlreadyInList(selectedInputCity)) {
                toastr.warning("Selected city is already added into your list");
            }
            else {
                //adding city to list and getting weather data
                this.props.addCityToList(selectedInputCity);
            }
        }
        else {
            toastr.warning("Please input a valid city from list");
        }        
    }

    //this function is used to populate the city dropdown
    populateCityList(city, index) {
        return (
            <option value={city} key={index} />
        );
    }

    render() {
        return (
            <form>
                <input list="cities" className="form-input Inline" id="inpCity" placeholder="Type the name of a city" />
                <datalist id="cities">
                    {this.props.cities && this.props.cities.map(this.populateCityList, this)}
                </datalist>
                <button type="button" className="Button" id="btnSearch" onClick={this.addCityToMyListClick.bind(this)}>Search</button>
            </form>
        );
    }
}

export default CityList;
