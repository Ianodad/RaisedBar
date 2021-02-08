import React from 'react';

import renderer from 'react-test-renderer';

import App from "./";
import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';

it('<App/>', ()=>{
    const tree = renderer.create(<App/>).toJSON();
    expect(tree).toMatchSnapshot()
})

