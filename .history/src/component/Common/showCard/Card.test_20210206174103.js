import React from "react";

import { render, fireEvent, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';

import Card from "./Card";

const defaultProps = {
  onPress: jest.fn(),
  title: "Submit",
};

describe("<Card/> BaseCard", () => {
  // Start snapshot test
  it("renders in any case", () => {
    const tree = renderer.create(<Crad />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("<Button/> with passed props", () => {
    const onPress = jest.fn();

    const tree = renderer
      .create(<Button title="Start" onPress={onPress} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
