import Test from './sample';


import * as renderer from 'react-test-renderer';
import * as React from 'react';


test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Test/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();


});