import React from "react";

import { render, fireEvent, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';

import Button from "./H";

describe("Home/> testing component", () => {

    describe("Check componet renders", () => {
      // Start snapshot test
      it("<Layout/> renders in any case", () => {
        const tree = renderer.create(<index />).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
});
