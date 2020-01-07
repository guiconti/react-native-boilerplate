import React from 'react';
import { mount, shallow } from 'enzyme';
import { FooPage } from './Foo';
import FooText from '../elements/FooText';
import initialState from '../../reducers/initialState';

describe('<Foo />', () => {
  const actions = {
    example: jest.fn(),
    anotherExample: jest.fn()
  };

  it('should contain <FooText />', () => {
    const wrapper = shallow(
      <FooPage
        actions={actions}
        foo={initialState.foo}
      />
    );

    expect(wrapper.find(FooText).length).toEqual(2);
  });

  it('calls example upon loading', () => {
    mount(
      <FooPage
        actions={actions}
        foo={initialState.foo}
      />
    );

    expect(actions.example).toHaveBeenCalledWith(
      'Test'
    );
  });

  it('calls another example upon loading', () => {
    mount(
      <FooPage
        actions={actions}
        foo={initialState.foo}
      />
    );

    expect(actions.anotherExample).toHaveBeenCalledWith(
      'anotherExample', 'Delayed'
    );
  });
});
