import React from 'react';
import renderer from 'react-test-renderer';

import { AccordionBuilder } from '../../components'

test('renders without crashing', () => {
	const component = renderer.create(<AccordionBuilder />);
	
	expect(component).toBeTruthy();
});