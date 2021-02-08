import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './index';

describe("BaseButton", () => {
  // Start snapshot test
  it("<Button/> renders in any case", () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});