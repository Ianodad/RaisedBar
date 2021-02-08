import React from "react";

import { render, fireEvent, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';

import Home from "./Home";
import { Navlink } from 'react-router';
import ShallowRenderer from 'react-test-renderer/shallow';


describe("<Home/> testing component", () => {

    describe("Check component renders", () => {
        it("renders Home component", () => {
          const renderer = new ShallowRenderer()
          renderer.render(<Home />);
          const renderedOutput = renderer.getRenderOutput();
          expect(renderedOutput).toMatchSnapshot();
        });
      // Start snapshot test
    //   it("<Home/> renders in any case", () => {
    //     const tree = renderer.create(<Home />).toJSON();
    //     expect(tree).toMatchSnapshot();
    //   });
    describe("Check component renders", () => {
        test('renders App component', () => {
        const { getByTestId } = render(<App />);
        expect(getByTestId('display')).toHaveTextContent('0')
        await fireEvent.click(getByTestId('button1'))
        expect(getByTestId('display')).toHaveTextContent('1')
        await fireEvent.click(getByTestId('button2'))
        expect(getByTestId('display')).toHaveTextContent('2')
        await fireEvent.click(getByTestId('button3'))
        expect(getByTestId('display')).toHaveTextContent('3')
        });
    });
});
