import React from 'react';
import { mount, shallow } from 'enzyme';
import { BarPage } from './Bar';
import BarText from '../elements/BarText';
import initialState from '../../reducers/initialState';

describe('<Bar />', () => {
  const actions = {
    example: jest.fn(),
    anotherExample: jest.fn()
  };

  it('should contain <BarText />', () => {
    const wrapper = shallow(
      <BarPage
        actions={actions}
        bar={initialState.bar}
      />
    );

    expect(wrapper.find(BarText).length).toEqual(2);
  });

  it('calls example upon loading', () => {
    mount(
      <BarPage
        actions={actions}
        bar={initialState.bar}
      />
    );

    expect(actions.example).toHaveBeenCalledWith(
      'A delayed example'
    );
  });

  it('calls another example upon loading', () => {
    mount(
      <BarPage
        actions={actions}
        bar={initialState.bar}
      />
    );

    expect(actions.anotherExample).toHaveBeenCalledWith(
      'anotherExample', 'Not a delayed example'
    );
  });
});
