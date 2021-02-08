import React from 'react';

import renderer from 'react-test-renderer';

import Button from "./Button";


describe('BaseButton', () => {
    it ('<Button/> renders in any case', ()=>{
        const tree = renderer.create(<Button/>).toJSON();
        expect(tree).toMatchSnapshot()
    })
    
    it ('<Button/> with passed props', ()=>{
         const onPress = jest.fn()
    
        const tree = renderer.create(<Button title="Start" onPress={onPress}/>).toJSON();
        expect(tree).toMatchSnapshot()
    })
  
});
