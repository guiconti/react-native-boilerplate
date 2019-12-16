import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import transitionConfig from  '../utils/transitionConfig';
import Home from './pages/Home';
import Example from './pages/Example';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    Example: {screen: Example},
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    transitionConfig
  }
);

const App = createAppContainer(MainNavigator);

export default App;
