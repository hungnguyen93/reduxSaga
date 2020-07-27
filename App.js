import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,

} from 'react-native';
import { Provider, connect } from 'react-redux';
import store from './src/config-store'
import Home from './src/screens/home/Home'
import Loading from './src/components/Loading';

const App = (props) => {
  console.log(props.data)
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <View style={{ flex: 1, paddingTop: 100 }}>
          <Home />
          <Loading />
        </View>
      </Provider>

    </>
  );
};





export default App;
