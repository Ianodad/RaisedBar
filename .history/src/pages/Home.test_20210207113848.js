import React from "react";

import { render, fireEvent, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';

import Button from "./Button";

describe("<Card/> BaseCard", () => {

    describe("HomePage", () => {
  // Start snapshot test
  it("<Layout/> renders in any case", () => {
    const tree = renderer.create(<index />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
  // describe("Snapshot renders", () => {
  //   // Start snapshot test
  //   it("renders in any case", () => {
  //     const tree = renderer.create(<Card />).toJSON();
  //     expect(tree).toMatchSnapshot();
  //   });
  // });

  // Rendering tests
  // describe("Renders", () => {
  //   it("renders <Card /> and result isDefined.", () => {
  //     let result = render(<Card data={defaultProps.data} />);
  //     expect(result).toBeDefined();
  //   });
  // });
});
