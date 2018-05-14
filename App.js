/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';

import AlbumsList from './src/components/AlbumsList';
import LoginForm from './src/components/LoginForm';
import TechStackList from './src/components/TechStackList';
import WishListList from './src/components/WishListList';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      //the 2nd argument is for passing any INITIAL_STATE
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))} >
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          <WishListList/>
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
