import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import transitionConfig from  '../utils/transitionConfig';
import Home from './pages/Home';
import Example from './pages/Example';
import Onboarding from './containers/Onboarding';
import Login from './containers/Login';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    Example: {screen: Example},
    Onboarding: {screen: Onboarding},
    Login: {screen: Login},
  },
  {
    initialRouteName: 'Onboarding',
    headerMode: 'none',
    transitionConfig
  }
);

const App = createAppContainer(MainNavigator);

export default App;
