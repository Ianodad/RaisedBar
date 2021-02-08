import React from 'react';
import ReactDOM from 'react-dom';

import Index from './index';

import { render, fireEvent, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer'

describe("BaseLayoutComponent", () => {
  // Start snapshot test
  it("<Layout/> renders in any case", () => {
    const tree = renderer.create(<Layout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});