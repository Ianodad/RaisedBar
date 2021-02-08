import React from "react";

import { render, fireEvent, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

import Card from "./Card";


const data = { idDrink : "idDrink", strDrinkThumb:"thumb", strDrink:"Drink"}

describe("<Card/> BaseCard", () => {
  describe("Snapshot renders", () => {
  // Start snapshot test
    //  it("renders in any case", () => {
    //    const tree = renderer.create(<Card data={data}/>).toJSON();
    //   expect(tree).toMatchSnapshot();
    //  });

     it("renders Home component", () => {
          const renderer = new ShallowRenderer()
          renderer.render(<Card data={} />);
          const renderedOutput = renderer.getRenderOutput();
          expect(renderedOutput).toMatchSnapshot();
     });
   });

//   // Rendering tests
//   // describe("Renders", () => {
//   //   it("renders <Card /> and result isDefined.", () => {
//   //     let result = render(<Card data={defaultProps.data} />);
//   //     expect(result).toBeDefined();
//   //   });
//   // });
});
