import React from 'react';

import renderer from 'react-test-renderer';

import Button from "./Button";

it ('<Button/> renders', ()=>{
    const tree = renderer.create(<Button/>).toJSON();
    expect(tree).toMatchSnapshot()
})

it ('<Button/>', ()=>{
    const tree = renderer.create(<Button/>).toJSON();
    expect(tree).toMatchSnapshot()
})