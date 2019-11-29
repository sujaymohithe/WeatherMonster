import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from "react-redux";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import CityList from '../components/city/CityList';
import { store } from '../store';

Enzyme.configure({ adapter: new Adapter() });

describe('<CityList />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CityList />)
    });

    it('Should render the CityList component', () => {
        expect(wrapper.find('datalist').length).toEqual(1);
    })

    it('Should render the city list with 2 cities in number', () => {
        wrapper.setProps({ cities: ["Berlin", "Munich"] });
        expect(wrapper.find('datalist option').length).toEqual(2);
    })

    it('Should render all 10 cities when app component is mounted', () => {
        const wrapper = mount(
            <Provider store={store} >
                <App />
            </Provider>);
        expect(wrapper.find('datalist option').length).toEqual(10);
    })

    it('Should render Search Button', () => {
        const wrapper = mount(
            <Provider store={store} >
                <App />
            </Provider>);
        expect(wrapper.find(CityList).find('#btnSearch').length).toEqual(1);
    })

    it('Search Button should be clickable', () => {
        const component = mount(
            <Provider store={store} >
                <App />
            </Provider>);
        const wrapper = component.find("#inpCity");
        wrapper.instance().value = "Berlin";
        const button = component.find(CityList).find('#btnSearch').at(0);
        button.simulate('click');       
    })
})