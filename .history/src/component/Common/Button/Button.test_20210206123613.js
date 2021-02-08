import React from 'react';

import renderer from 'react-test-renderer';

import Button from "./Button";


describe('BaseButton', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <BaseButton
        listingPrice={230000}
      />,
      // Note that we pass in a mock value for the `listingPrice` directly, rather
      // than using the value from Redux.
    );
    expect(wrapper).toMatchSnapshot();
  });
});

it ('<Button/> renders in any case', ()=>{
    const tree = renderer.create(<Button/>).toJSON();
    expect(tree).toMatchSnapshot()
})

it ('<Button/> with passed props', ()=>{
     const onPress = jest.fn()

    const tree = renderer.create(<Button title="Start" onPress={onPress}/>).toJSON();
    expect(tree).toMatchSnapshot()
})