import 'babel-polyfill';
import React, { Component } from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Example from './Example';


describe('<Example />', () => {
	it('renders one <a /> component', () => {
		const wrapper = shallow(<Example />);
		expect(wrapper.find('div')).to.have.length(1);
	});

	it('Hello from Enzyme, Jungle Gym!');
});

