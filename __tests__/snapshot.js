// __tests__/snapshot.js
import React from 'react'
import renderer from 'react-test-renderer'
import About from '../pages/about-us'

it('renders aboutpage unchanged', () => {
  const tree = renderer.create(<About />).toJSON()
  expect(tree).toMatchSnapshot()
})