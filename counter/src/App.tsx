import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import Main from './screens/Main';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Main />
      </SafeAreaView>
    </Provider>
  );
};
export default App;
