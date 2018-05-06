import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import { DrawerNavigator } from 'react-navigation';

import AppHeader from '../../components/header';
import NavBarItem from '../../components/navigation/items';
import Home from '../../components/home';
import Blog from '../../components/blog';
import Content from '../../components/blog/row/content';
import Contact from '../../components/contact';
import { getNavigationOptionsWithAction, getDrawerNavigationOptions, getDrawerConfig } from '../../components/navigation';

const getDrawerItem = navigation => (
  <NavBarItem
    iconName="menu"
    onPress={() => {
      if (navigation.state.routes[0].index === 0) {
        // check if drawer is not open, then only open it
        navigation.navigate('DrawerOpen');
      } else {
        // else close the drawer
        navigation.navigate('DrawerClose');
      }
    }}
  />
);

const getDrawerIcon = (iconName, tintColor) => (<Icon
  name={iconName}
  size={20}
  color={tintColor}
/>);

const homeDrawerIcon = ({ tintColor }) => getDrawerIcon('home', tintColor);
const blogDrawerIcon = ({ tintColor }) => getDrawerIcon('collections-bookmark', tintColor);
const contactDrawerIcon = ({ tintColor }) => getDrawerIcon('send', tintColor);

const homeNavOptions = getDrawerNavigationOptions('Home', 'transparent', 'white', homeDrawerIcon);
const blogNavOptions = getDrawerNavigationOptions('Blog', 'transparent', 'white', blogDrawerIcon);
const contactNavOptions = getDrawerNavigationOptions('Contact', 'transparent', 'white', contactDrawerIcon);

const Drawer = DrawerNavigator({
  Home: { screen: Home, navigationOptions: homeNavOptions },
  Blog: { screen: Blog, navigationOptions: blogNavOptions },
  Contact: { screen: Contact, navigationOptions: contactNavOptions },
}, getDrawerConfig(300, 'left'));

Drawer.navigationOptions = ({ navigation }) => getNavigationOptionsWithAction('Jarrell', 'transparent', 'white', getDrawerItem(navigation));

export default Drawer;
