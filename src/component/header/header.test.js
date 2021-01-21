import React from "react";
// import { configure, shallow } from 'enzyme';
import { shallow } from 'enzyme';
// import Adapter from "enzyme-adapter-react-16";

import { findByTestAttr } from './../../../Utils';
import Header from './index';

//configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />);
    return component;
};

describe('Header Component', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });

    // test component
    it('Should render without errors', () => {
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    //test logo
    it('Should render a logo ', () => {
        const logo = findByTestAttr(component, 'logoIMG');
        expect(logo.length).toBe(1);
    })
});