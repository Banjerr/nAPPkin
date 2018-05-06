import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

export default class ContentHeader extends React.Component {
  render() {
    const JarrellLogo = <Image
      style={styles.image}
      source={require('./jarrell-logo-retina.png')}
    />;

    const HomeBtn = <Icon
      name='home'
      color='#fff'
      onPress={() => this.props.navigation.navigate('Home')}
    />;

    const BackBtn = <Icon
      name='keyboard-arrow-left'
      color='#fff'
      onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
    />;

    return (
      <View style={styles.container}>
        <Header style={styles.header}
          leftComponent={BackBtn}
          centerComponent={JarrellLogo}
          rightComponent={HomeBtn}
          innerContainerStyles={{alignItems: 'center'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flex: -1,
    maxWidth: '100%',
    backgroundColor: '#20364C',
    justifyContent: 'center'
  },
  header: {
    maxWidth: '95%',
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    flex: -1,
  },
  image: {
    maxWidth: 145,
    maxHeight: 100,
    resizeMode: 'contain',
  }
});
