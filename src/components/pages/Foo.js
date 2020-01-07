import React from 'react';
import PropTypes from 'prop-types';
import FooText from '../elements/FooText';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/fooActions';

export class FooPage extends React.Component {
  example = () => {
    this.props.actions.example('Test');
  }

  anotherExample = () => {
    this.props.actions.anotherExample('anotherExample', 'Delayed');
  }

  componentDidMount() {
    this.example();
    this.anotherExample();
  }

  render() {
    const foo = this.props.foo;
    return (
      <div>
        <h2 className="alt-header">Example</h2>
        <FooText fixedText="The example value is" dynamicText={foo.example}/>
        <FooText fixedText="The another example value is" dynamicText={foo.anotherExample}/>
      </div>
    );
  }
}

FooPage.propTypes = {
  actions: PropTypes.object.isRequired,
  foo: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    foo: state.foo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FooPage);
