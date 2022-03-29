import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
})

//testing function
function sum (a, b)  {
  return a+b;
}
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
})
