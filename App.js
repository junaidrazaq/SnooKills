import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// REDUX
import {Provider} from 'react-redux';
import Root from './src';
import ConfigureStore from './src/redux/ConfigureStore';

const store = ConfigureStore();

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
