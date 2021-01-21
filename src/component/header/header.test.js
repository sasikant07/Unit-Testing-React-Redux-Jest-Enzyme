import React from "react";
import { configure, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Header from './index';

//configure({ adapter: new Adapter() });

describe('Header Component', () => {
    it('It should render without errors', () => {
        const component = shallow(<Header />);
        console.log(component.debug());
        const wrapper = component.find('.headerComponent');
        expect(wrapper.length).toBe(0);
    });
});