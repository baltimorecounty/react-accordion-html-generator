import React from 'react';
import renderer from 'react-test-renderer';

import { Accordionater } from '../../components'

test('renders without crashing', () => {
	const component = renderer.create(<Accordionater />);
	
	expect(component).toBeTruthy();
});