import React from "react";

import { render, fireEvent, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';

import Home from "./Home";
import { Navlink } from 'react-router';
import ShallowRenderer from 'react-test-renderer/shallow';


describe("<Home/> testing component", () => {

    describe("Check component renders", () => {
        it("renders", () => {
          shallowRenderer.render(<NavBar />);
  const renderedOutput = shallowRenderer.getRenderOutput();
  expect(renderedOutput).toMatchSnapshot();
        });
      // Start snapshot test
    //   it("<Home/> renders in any case", () => {
    //     const tree = renderer.create(<Home />).toJSON();
    //     expect(tree).toMatchSnapshot();
    //   });
    });
});
