import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getWalletFunds } from '../../reducers/selectors';
import { fetchFunds } from  '../../actions/walletActions';

export default function Home() {
  const dispatch = useDispatch();
  const funds = useSelector(getWalletFunds);
  useEffect(() => {
    dispatch(fetchFunds());
  }, []);
  return (
    <View style={styles.container}>
      <Text>Hi this is the home screen! {funds}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
