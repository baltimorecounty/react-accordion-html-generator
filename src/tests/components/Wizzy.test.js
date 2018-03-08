import React from 'react';
import renderer from 'react-test-renderer';

import { Wizzy } from '../../components'

test('renders without crashing', () => {
	const component = renderer.create(<Wizzy />);
	
	expect(component).toBeTruthy();
});