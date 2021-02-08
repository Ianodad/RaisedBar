import React from "react";

import { render, fireEvent, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';

import Home from "./Home";
import { Nav;ink } from 'react-router';

describe("<Home/> testing component", () => {

    describe("Check component renders", () => {
      // Start snapshot test
      it("<Home/> renders in any case", () => {
        const tree = renderer.create(<Home />).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
});
