import React from 'react';

import renderer from 'react-test-renderer';

import App from "./App";

it ('<App/>', ()=>{
    const tree = renderer.create(<Home/>).toJSON();
    expect(tree).toMatchSnapshot()
})
