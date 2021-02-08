import React from 'react';

import renderer from 'react-test-renderer';

import Button from "./Button";


describe('BaseButton', () => {
    // Snapshot 
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

// describe('BaseButton', () => {
//   describe('when user clicks button', () => {
//     it ('calls correct function to save the information', () => {
//       const onButtonClickMock = jest.fn();
//       const wrapper = shallow(
//         <BaseButton
//           onButtonClick={onButtonClickMock}
//         />,
//       );
//       const buttonElement = wrapper.find('.base-button'); // step 1 above
//       buttonElement.simulate('click'); // step 2
      
//       expect(onButtonClickMock).toHaveBeenCalledTimes(1); // step 3
//       expect(onButtonClickMock).toHaveBeenCalledWith(true);
//     });
//   });
// });