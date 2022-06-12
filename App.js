import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-console-time-polyfill';

// REDUX
import {Provider} from 'react-redux';
import Root from './src';
import {store} from './src/redux/ConfigureStore';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Root />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
