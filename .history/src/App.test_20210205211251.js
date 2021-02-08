import React from 'react';

import renderer from 'react-test-renderer';

import App from "./App";
import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';

it ('<App/>', ()=>{
    const tree = renderer.create(<App/>).toJSON();
    expect(tree).toMatchSnapshot()
})

import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import App from './App';


describe("unit-test", () => {
    it("renders the right component with following path '/impressum'", () => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['/impressum']}>
                <App></App>
            </MemoryRouter>
        )

        let impressumPage = getByTestId("impressum-page")

        expect(impressumPage).toBeInTheDocument()
    })
})