/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Root from '../src/components/registrations/Root';
import Wallet from '../src/components/registrations/Wallet';
import Onboarding from '../src/components/registrations/Onboarding';
import { retrieveFunds } from '../src/services/walletServices';
import { names } from './app.json';

//  Pages
AppRegistry.registerComponent(names.root, () => Root);

//  Containers
AppRegistry.registerComponent(names.wallet, () => Wallet);
AppRegistry.registerComponent(names.onboarding, () => Onboarding);

//  Tasks
AppRegistry.registerHeadlessTask('retrieveFunds', () => retrieveFunds);
