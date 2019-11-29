import React from 'react';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WeatherHome from '../components/weather/WeatherHome';
import { Provider } from "react-redux";
import WeatherWidget from '../components/weather/WeatherWidget';
import App from '../App';
import {store} from '../store';

Enzyme.configure({ adapter: new Adapter() });

describe('Weather Home And Widget Component', () => {
    it('Should render the WeatherHome component', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <WeatherHome />
            </Provider>);
        expect(wrapper.find(WeatherHome).length).toBe(1);
    })   

    it('renders the WeatherWidget component', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <WeatherWidget />
            </Provider>);
        expect(wrapper.find(WeatherWidget).length).toEqual(1);
    })

    it('Should render no city weather details when app component is mounted with no city selected in my list', () => {
        const wrapper = mount(
            <Provider store={store} >
                <App />
            </Provider>);
        expect(wrapper.find('.Boxwidget').length).toEqual(0);
    })  

    it('Should render the weather details of city from list', () => {
        const wrapper = shallow(<WeatherWidget />);
        wrapper.setProps({ weatherData: [{ "cityName": "Berlin", "Min": 43, "Max": 54 }] });
        expect(wrapper.find(".Boxwidget").length).toEqual(1);
    })

    it('Should render remove button to remove city from my list', () => {
        const wrapper = shallow(<WeatherWidget />);
        wrapper.setProps({ weatherData: [{ "cityName": "Berlin", "Min": 43, "Max": 54 }] });
        expect(wrapper.find(".ButtonPrimary").length).toEqual(1);
    })   

})