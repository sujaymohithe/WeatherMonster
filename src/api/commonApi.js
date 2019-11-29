import axios from 'axios';
import * as appConstants from '../appConstants';

class CommonApi {
    static getWeatherDataForACity(searchTxt) {
        return axios.get(appConstants.API_URL + searchTxt + "&APPID=" + appConstants.API_KEY).then(response => {
            return response.data;
        }).catch(error => {
            return error;
        });
    }
}

export default CommonApi;