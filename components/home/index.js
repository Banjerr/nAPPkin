import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the home "page"</Text>
        <Text>INSTANT!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
});
