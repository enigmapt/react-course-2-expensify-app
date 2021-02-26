import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('should render Header correctly', () => {

    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    
    
    //expect(wrapper.find('h1').text()).toBe('Expensify')


    // só com jest, SEM ENZYME
    // const renderer = new ReactShallowRender();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});