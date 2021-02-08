import React from 'react';

import renderer from 'react-test-renderer';

import Butt from "./Button";

it ('<Home/>', ()=>{
    const tree = renderer.create(<Home/>).toJSON();
    expect(tree).toMatchSnapshot()
})
