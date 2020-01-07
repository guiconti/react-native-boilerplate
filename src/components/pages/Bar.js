import React from 'react';
import PropTypes from 'prop-types';
import BarText from '../elements/BarText';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/barActions';

export class BarPage extends React.Component {
  example = () => {
    this.props.actions.example('A delayed example');
  }

  anotherExample = () => {
    this.props.actions.anotherExample('anotherExample', 'Not a delayed example');
  }

  componentDidMount() {
    this.example();
    this.anotherExample();
  }

  render() {
    const bar = this.props.bar;
    return (
      <div>
        <h2 className="alt-header">Example</h2>
        <BarText fixedText="The example value is" dynamicText={bar.example}/>
        <BarText fixedText="The another example value is" dynamicText={bar.anotherExample}/>
      </div>
    );
  }
}

BarPage.propTypes = {
  actions: PropTypes.object.isRequired,
  bar: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    bar: state.bar
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
)(BarPage);
