import React from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  View,
} from 'react-native';
import styles from '../styles/homePage.js';
import { Card, CardItem, Body, Left, Icon, Text, Spinner } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/walletActions';

class Wallet extends React.Component {

  getFunds = () => {
    this.props.actions.getFunds();
  };

  componentDidMount() {
    // this.getFunds();
    setTimeout(this.getFunds, 2000);
  }

  render() {
    let wallet = this.props.wallet;
    return (
    <>
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Card>
              <CardItem style={styles.card}>
                <Text style={{ color: 'white' }}>Wallet</Text>
              </CardItem>
              {wallet.funds ? (
                <CardItem style={styles.card}>
                  <Left>
                    <Icon style={{ color: 'white' }} name="card" />
                    <Body>
                      <Text style={{ color: 'white' }}>Fundos na carteira</Text>
                      <Text note style={{ color: 'white' }}>R$ {wallet.funds}</Text>
                    </Body>
                  </Left>
                </CardItem>
              ) : (
                <CardItem style={styles.card}>
                  <Spinner color='white' />
                </CardItem>
              )}
            </Card>
          </View>
        </View>
      </SafeAreaView>
    </>
    );
  }
}

Wallet.propTypes = {
  actions: PropTypes.object.isRequired,
  wallet: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    wallet: state.wallet
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
)(Wallet);
