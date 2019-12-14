/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Root from '../src/components/registrations/Root';
import Wallet from '../src/components/registrations/Wallet';
import { names } from './app.json';

AppRegistry.registerComponent(names.root, () => Root);
AppRegistry.registerComponent(names.wallet, () => Wallet);
