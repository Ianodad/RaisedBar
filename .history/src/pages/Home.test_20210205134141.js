test('Fake Test', ()=>{
    expect(true).toBeTruthy()
});

import React from 'react';

import renderer from 'react-test-renderer';

import Home from "./Home";

it ('<Home/>' ()=>{
    const tree = renderer.create(<Home/>).toJSON();

})
