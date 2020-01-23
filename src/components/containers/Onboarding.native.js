import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ImageBackground,
  StatusBar,
} from 'react-native';
// import styles from '../../styles/homePage.js';
import { LOGIN } from '../../constants/screens';
import { Button, Text, H2 } from 'native-base';
import LottieView from 'lottie-react-native';
import ViewPager from '@react-native-community/viewpager';
import navigate from '../../utils/navigate';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/onboardingActions';

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    paddingBottom: 700,
  },
  circle: {
    marginTop: 17,
    width: 5,
    height: 5,
    borderRadius: 10/2,
    backgroundColor: '#b3adb0'
  },
  selectedCircle: {
    marginTop: 15,
    width: 10,
    height: 10,
    borderRadius: 10/2,
    backgroundColor: '#ec399e'
  },
});

class Onboarding extends React.Component {
  viewPager: React.Ref<typeof ViewPager>;

  constructor(props) {
    super(props);
    this.viewPager = React.createRef();
    this.speed = 1
  }

  changePage = page => {
    this.animation.play(600 * page, 600 + 600 * page);
    if (this.props.onboarding.page > page) {
      this.speed = -1
    } else {
      this.speed = 1
    }
    this.props.actions.changePage(page);
  }

  go = (page) => {
    this.viewPager.current.setPage(page);
  };

  componentDidMount() {
    this.changePage(0);
  }

  render() {
    const { navigation } = this.props;
    const { page } = this.props.onboarding;
    const { speed } = this;
    return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <StatusBar translucent backgroundColor="transparent" />
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{justifyContent:'center', alignItems:'center', alignSelf:'center', width: 350, zIndex: 20, position: 'absolute'}}
          source={require('../../lotties/onboarding.json')}
          speed={speed}
        />
        <ViewPager
          style={styles.viewPager}
          initialPage={page}
          onPageSelected={(e) => this.changePage(e.nativeEvent.position)}
          ref={this.viewPager}
        >
          <View key="0">
            <ImageBackground
              resizeMode= 'stretch'
              style={{height: 300}}
              source={require('../../images/wave1.png')}
            >
            </ImageBackground>
            <H2 style={{textAlign: 'center', lineHeight: 36, marginTop: 30}}>
            Consulte grátis seu CPF e seu Serasa Score
            </H2>
            <Text style={{paddingLeft: 35, paddingRight: 35, marginTop: 20, fontSize: 14, color: '#636f88', textAlign: 'center', lineHeight: 23}}>
              Saiba como está seu nome na Serasa e acompanhe a sua pontuação de crédito.
            </Text>
          </View>
          <View key="1">
            <ImageBackground
              resizeMode= 'stretch'
              style={{height: 300, translateX: 0, resizeMode: 'contain'}}
              source={require('../../images/wave2.png')}
            >
            </ImageBackground>
            <H2 style={{textAlign: 'center', lineHeight: 36, marginTop: 30}}>
              Coloque suas contas em dia
            </H2>
            <Text style={{paddingLeft: 35, paddingRight: 35, marginTop: 20, fontSize: 14, color: '#636f88', textAlign: 'center', lineHeight: 23}}>
              Confira as ofertas disponíveis para você e feche acordos sem sair de casa.
            </Text>
          </View>
          <View key="2">
            <ImageBackground
              resizeMode= 'stretch'
              style={{height: 300, translateX: 0, resizeMode: 'contain'}}
              source={require('../../images/wave3.png')}
            >
            </ImageBackground>
            <H2 style={{textAlign: 'center', lineHeight: 36, marginTop: 30}}>
              Tudo isso com a segurança da Serasa
            </H2>
            <Text style={{paddingLeft: 35, paddingRight: 35, marginTop: 20, fontSize: 14, color: '#636f88', textAlign: 'center', lineHeight: 23}}>
              Aqui no nosso App, todos os seus dados estão seguros.
            </Text>
          </View>
        </ViewPager>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 0}}>
          <View style={{width: 170, height: 50, paddingLeft: 12}}>
            {page > 0 &&
              <Button transparent onPress={() => this.go(page - 1)}>
                <Text style={{color: '#2173dd'}}>
                  Anterior
                </Text>
              </Button>
            }
          </View>
          <View style={page == 0 ? styles.selectedCircle : styles.circle} />
          <View style={page == 1 ? styles.selectedCircle : styles.circle} />
          <View style={page == 2 ? styles.selectedCircle : styles.circle} />
          <View style={{width: 170, height: 50, paddingLeft: 50}}>
            {page < 2 &&
              <Button transparent onPress={() => this.go(page + 1)}>
                <Text style={{color: '#2173dd'}}>
                  Próximo
                </Text>
              </Button>
            }
            {page == 2 &&
              <Button transparent onPress={() => navigate(navigation, LOGIN, true)}>
                <Text style={{color: '#2173dd'}}>
                  Vamos lá
                </Text>
              </Button>
            }
          </View>
        </View>
      </SafeAreaView>
    </>
    );
  }
}

Onboarding.propTypes = {
  actions: PropTypes.object.isRequired,
  onboarding: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    onboarding: state.onboarding
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
)(Onboarding);
