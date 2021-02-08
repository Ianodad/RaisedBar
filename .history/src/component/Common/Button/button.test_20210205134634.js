import React from 'react';

import renderer from 'react-test-renderer';

import Home from "./Button";

it ('<Home/>', ()=>{
    const tree = renderer.create(<Home/>).toJSON();
    expect(tree).toMatchSnapshot()
})
