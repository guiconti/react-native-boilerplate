import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableHighlight
} from 'react-native';
// import styles from '../../styles/homePage.js';
import { Button, Text, H2 } from 'native-base';
// import LottieView from 'lottie-react-native';
// import ViewPager from '@react-native-community/viewpager';
import navigate from '../../utils/navigate';
import LinearGradient from 'react-native-linear-gradient';
import { TextInputMask } from 'react-native-masked-text'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/loginActions';

const styles = StyleSheet.create({
  button: {
    padding: 15,
    marginTop: 15,
    borderRadius: 10,
  },
  marginWithoutKeyboard: {
    marginTop: 220,
  },
  marginWithKeyboard: {
    marginTop: 60
  },
  marginTopWithoutKeyboard: {
    marginTop: 250,
  },
  marginTopWithKeyboard: {
    marginTop: 70
  },
});

class Login extends React.Component {


  constructor(props) {
    super(props);
    this.gradientColors = ['#0c8bd3', '#1aacf3'];
    this._keyboardDidShow = this._keyboardDidShow.bind(this);
    this._keyboardDidHide = this._keyboardDidHide.bind(this);
    // '#295fb0'
  }
  
  toggleKeyboard = value => {
    this.props.actions.toggleKeyboard(value);
  }

  changeCPF = value => {
    if (value.length > this.props.login.cpf.length) {
      if (value.length === 3 || value.length === 7) {
        value += '.';
      } else if (value.length === 11) {
        value += '-';
      }
    } else if (value.length === 4 || value.length === 8 || value.length === 12) {
      value = value.slice(0, -1);
    }
    this.props.actions.changeCPF(value);
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
    setTimeout(this.myTextInput.focus, 10);
  }

  _keyboardDidShow() {
    this.toggleKeyboard(true);
  }

  _keyboardDidHide() {
    this.toggleKeyboard(false);
  }

  render() {
    const { navigation } = this.props;
    const { isKeyboardShowing, cpf } = this.props.login;
    let { gradientColors } = this;
    return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <StatusBar translucent backgroundColor="transparent" />
        <Image
          resizeMode='contain'
          style={{width: 170, marginLeft: 20, marginTop: 20}}
          source={require('../../images/logo.png')}
        />
        <KeyboardAvoidingView style={{paddingLeft: 20, paddingRight: 20, paddingBottom: 20}} enabled>
          <H2 style={isKeyboardShowing ? styles.marginTopWithKeyboard : styles.marginTopWithoutKeyboard}>
            Digite o seu CPF
          </H2>
          {/* <TextInputMask
            style={{ height: 100, fontSize: 23, borderWidth: 0, fontWeight: '100', color: '#636f88' }}
            keyboardType='numeric'
            type={'cpf'}
            value={cpf}
            onChangeText={this.changeCPF}
          /> */}
          <TextInput
            style={{ height: 100, fontSize: 23, borderWidth: 0, fontWeight: '100', color: '#636f88' }}
            keyboardType="numeric"
            onChangeText={this.changeCPF}
            value={cpf}
            maxLength = {14}
            ref={ref => {this.myTextInput = ref}}
          />
          <Text style={{ marginTop: 10, fontSize: 14, color: '#636f88', lineHeight: 23}}>
            Os seus dados estão seguros no Serasa ;)
          </Text>
          <TouchableHighlight underlayColor="transparent" style={isKeyboardShowing ? styles.marginWithKeyboard : styles.marginWithoutKeyboard}>
          {/* <Button style={{color: '#ffffff', textAlign: 'center', marginTop: 230}}> */}
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={gradientColors} style={styles.button} onPress={this.onPress}>
              <Text style={{color: 'white', fontSize: 14, textAlign: 'center'}}>
                CONTINUAR
              </Text>
            </LinearGradient>
          </TouchableHighlight>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
    );
  }
}

Login.propTypes = {
  actions: PropTypes.object.isRequired,
  login: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    login: state.login
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
)(Login);
