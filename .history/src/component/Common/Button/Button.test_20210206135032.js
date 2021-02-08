
describe('BaseButton', () => {
  describe('when user clicks button', () => {
    it ('calls correct function to save the information', () => {
      const onButtonClickMock = jest.fn();
      const wrapper = shallow(
        <BaseButton
          onButtonClick={onButtonClickMock}
        />,
      );
      const buttonElement = wrapper.find('.base-button'); // step 1 above
      buttonElement.simulate('click'); // step 2
      
      expect(onButtonClickMock).toHaveBeenCalledTimes(1); // step 3
      expect(onButtonClickMock).toHaveBeenCalledWith(true);
    });
  });
});