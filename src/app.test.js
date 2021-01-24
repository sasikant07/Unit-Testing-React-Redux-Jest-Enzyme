import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import App from './App';
import { findByTestAttr, testStore } from "./../Utils";

const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<Provider store={store}><App /></Provider>).childAt(0);
    return wrapper;
};

describe('App Component', () => {
    let wrapper;
    beforeEach(() => {

        const initialState = {
            posts: [{
                title: 'Example title 1',
                body: 'Some text'
            }, {
                title: 'Example title 2',
                body: 'Some text'
            }, {
                title: 'Example title 3',
                body: 'Some text'
            }]
        }
        wrapper = setUp(initialState);
    });

    it('Should render without errors', () => {
        const component = findByTestAttr(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    });

    it('exampleMethod_updatesState Methid should update state as expected', () => {
        const classInstance = wrapper.instance();
        classInstance.exampleMethod_updatesState();
        const newState = classInstance.state.hideBtn;
        expect(newState).toBe(true);
    });

    it('exampleMethod_resturnsAValue Method should return value as expected', () => {
        const classInstance = wrapper.instance();
        const newvalue = classInstance.exampleMethod_resturnsAValue(6);
        expect(newvalue).toBe(7)
    });
});
