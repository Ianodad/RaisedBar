import React from "react";

import { render, fireEvent, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';

import Button from "./Button";

const defaultProps = {
  onPress: jest.fn(),
  title: "Submit",
};

describe("BaseCard", () => {
  // Start snapshot test
  it("<CARD/> renders in any case", () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("<Button/> with passed props", () => {
    const onPress = jest.fn();

    const tree = renderer
      .create(<Button title="Start" onPress={onPress} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  // End snapshot test

  // action testing
  describe("when user clicks button", () => {
    test("button renders with correct text", () => {
      const { queryByText, rerender } = render(<Button {...defaultProps} />);
      expect(queryByText("Submit")).toBeTruthy();

      // Change props
      rerender(<Button {...defaultProps} title="Go" />);
      expect(queryByText("Go")).toBeTruthy();
    });
  });
});
