import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './index';

describe("BaseLayoutComponent", () => {
  // Start snapshot test
  it("<Button/> renders in any case", () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});