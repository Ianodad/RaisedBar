import React from 'react';

import renderer from 'react-test-renderer';

import Button from "./Button";

it ('<Button/> renders in any case', ()=>{
    const tree = renderer.create(<Button/>).toJSON();
    expect(tree).toMatchSnapshot()
})

it ('<Button/> with passed props', ()=>{
    const tree = renderer.create(<Button title=""/>).toJSON();
    expect(tree).toMatchSnapshot()
})