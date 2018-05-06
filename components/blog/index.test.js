import React from 'react';
import Blog from './Blog';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Blog />).toJSON();
  expect(rendered).toBeTruthy();
});
