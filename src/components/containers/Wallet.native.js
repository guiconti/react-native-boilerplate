import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SafeAreaView,
  View,
} from 'react-native';
import styles from '../../styles/homePage.js';
import { Card, CardItem, Body, Left, Icon, Text, Spinner } from 'native-base';
import { getWalletFunds } from '../../reducers/selectors';
import { fetchFunds } from  '../../actions/walletActions';

const Wallet = () => {
  const dispatch = useDispatch();
  const funds = useSelector(getWalletFunds);
  useEffect(() => {
    dispatch(fetchFunds());
  }, []);

  return (
    <>
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Card>
              <CardItem style={styles.card}>
                <Text style={{ color: 'white' }}>Wallet</Text>
              </CardItem>
              {funds ? (
                <CardItem style={styles.card}>
                  <Left>
                    <Icon style={{ color: 'white' }} name="card" />
                    <Body>
                      <Text style={{ color: 'white' }}>Fundos na carteira</Text>
                      <Text note style={{ color: 'white' }}>R$ {funds}</Text>
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
  )
}

export default Wallet;