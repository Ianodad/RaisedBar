import React from "react";

import { render, fireEvent, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';

import Card from "./Card";

const defaultProps = {
  onPress: jest.fn(),
  title: "Submit",
};

describe("<Card/> BaseCard", () => {

    describe("Snapsh", () => {
        // Start snapshot test
        it("renders in any case", () => {
          const tree = renderer.create(<Crad/>).toJSON();
          expect(tree).toMatchSnapshot();
        });

    })



});


  // Start snapshot test
  it("renders in any case", () => {
    const tree = renderer.create(<Crad/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
