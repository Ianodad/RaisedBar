import React from 'react';

import renderer from 'react-test-renderer';

import App from "./Button";

it ('<Button/>', ()=>{
    const tree = renderer.create(<Button/>).toJSON();
    expect(tree).toMatchSnapshot()
})
