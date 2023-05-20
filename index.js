/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import i18next from './components/Language/Translate';

AppRegistry.registerComponent(appName, () => App);
