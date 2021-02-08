import React from "react";

import { render, fireEvent, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';

import Card from "./Card";

const defaultProps = {
  data: { idDrink : "idDrink",strDrinkThumb:"thumb",strDrink:"Drink"},
  title: "Submit",
};

describe("<Card/> BaseCard", () => {
  describe("Snapshot renders", () => {
    // Start snapshot test
    it("renders in any case", () => {
      const tree = renderer.create(<Card />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  // Rendering tests
  describe("Renders", () => {
    it("renders <Card /> and result isDefined.", () => {
      let result = render(<Card data={defaultProps} />);
      expect(result).toBeDefined();
    });
  });
});
