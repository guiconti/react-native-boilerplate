import React from 'react';
import { shallow } from 'enzyme';
import BarText from './BarText';

describe('<BarText />', () => {
  const fixedText = 'Bar is being';
  const dynamicText = 'tested';

  it('should have a text using the fixedText and dynamicText variables', () => {
    const wrapper = shallow(
      <BarText
        fixedText={fixedText}
        dynamicText={dynamicText}
      />
    );
    const actual = wrapper.find('p').text();
    const expected = `${fixedText} ${dynamicText}`;

    expect(actual).toEqual(expected);
  });
});
