import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import App from '../App';
import {store} from '../store';
import Header from '../components/common/Header';

Enzyme.configure({ adapter: new Adapter() });

it('renders App Component', () => {
    const wrapper = mount(
        <Provider store={store} >
            <App />
        </Provider>);
    expect(wrapper.find('.App').length).toEqual(1);
})

it('renders Header Component', () => {
    const component = mount(
        <Provider store={store} >
            <App />
        </Provider>);
    const wrapper = component.find(Header).find(`[data-test='Logo']`);
    expect(wrapper.text() == "Weather Monster");
})