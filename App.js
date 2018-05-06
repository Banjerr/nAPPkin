import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Drawer from './components/drawer';
import AppHeader from './components/header';
import ContentHeader from './components/header/content-header';
import Content from './components/blog/row/content';
import Blog from './components/blog';

StatusBar.setBarStyle('light-content', true);
StatusBar.setBackgroundColor('#20364C', true);

const App = StackNavigator({
  Drawer: {
    screen: Drawer
  },
  Content: {
    screen: Content,
    navigationOptions: {
      header: props => <ContentHeader {...props} />,
    }
  }
},
{
    initialRouteName: 'Drawer',
    headerMode: 'float',
    navigationOptions: {
      header: props => <AppHeader {...props} />,
    },
});

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});
