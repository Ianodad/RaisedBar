import React from "react";

import { render, fireEvent, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';

import Home from "./Home";
import { Navlink } from 'react-router';
import ShallowRenderer from 'react-test-renderer/shallow';



describe("<Details/> testing component", () => {

    describe("Check component renders", () => {
        it("renders Home component", () => {
          const renderer = new ShallowRenderer()
          renderer.render(<Home />);
          const renderedOutput = renderer.getRenderOutput();
          expect(renderedOutput).toMatchSnapshot();
        });
    });
});
