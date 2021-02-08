import React from "react";

import { render, fireEvent, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';

import Home from "./Home";
import { Navlink } from 'react-router';
import ShallowRenderer from 'react-test-renderer/shallow';
import Details from "./Details";
import api from '../'



describe("<Details/> testing component", () => {
    let mockData;
      beforeEach(() => {
        mockData = { match: { params: { id: 4 } } };
        jest.mock('../../../components/effects/use-fetch.effect');
      });

    describe("Check component renders", () => {
        it("renders Home component", () => {
          const renderer = new ShallowRenderer()
          renderer.render(<Details />);
          const renderedOutput = renderer.getRenderOutput();
          expect(renderedOutput).toMatchSnapshot();
        });

        it("renders Home components with props", () => {
          const renderer = new ShallowRenderer()
          renderer.render(<Details />);
          const renderedOutput = renderer.getRenderOutput();
          expect(renderedOutput).toMatchSnapshot();
        });

    });
});
