import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import HTMLView from 'react-native-htmlview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  photo: {
    flex: -1,
    maxWidth: '100%',
    width: '100%',
    height: 160,
    overflow: 'hidden',
  },
  htmlContainer: {
    flex: -1,
    maxWidth: '90%',
    alignSelf: 'center',
  },
  h1: {
    fontSize: 22,
    textAlign: 'center',
  },
  img: {
    maxWidth: '90%',
    width: '100%',
    maxHeight: 450,
    height: '100%'
  }
});

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { params } = this.props.navigation.state;
    let content = params.post.content.rendered;

    return (
      <ScrollView style={styles.container}>
        <Image source={{ uri: params.post._embedded["wp:featuredmedia"][0].source_url}} style={styles.photo} />
        <View style={styles.htmlContainer}>
          <HTMLView
            value={params.post.content.rendered}
            stylesheet={styles}
          />
        </View>
      </ScrollView>
    );
  }
}

export default Content;
