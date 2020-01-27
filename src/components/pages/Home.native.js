import React from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import styles from '../../styles/homePage.js';
import navigate from '../../utils/navigate';
import { EXAMPLE } from '../../constants/screens';
import { Content, Button, Text } from 'native-base';
import Wallet from '../containers/Wallet';

const HomePage = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Content>
                <Button primary onPress={() => navigate(navigation, EXAMPLE, false)}>
                  <Text> This is a button </Text>
                </Button>
              </Content>
              <Wallet />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

HomePage.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomePage;