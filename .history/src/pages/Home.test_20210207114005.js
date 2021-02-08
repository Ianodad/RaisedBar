import React from "react";

import { render, fireEvent, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';

import Home from "./Home";

describe("Home/> testing component", () => {

    describe("Check componet renders", () => {
      // Start snapshot test
      it("<Home/> renders in any case", () => {
        const tree = renderer.create(<Home />).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
});
