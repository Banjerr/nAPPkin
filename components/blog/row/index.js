import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: 'row',
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
    flexWrap: 'wrap',
    width: '80%',
  }
});

class Row extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const title = this.props.title.rendered;

    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Content', {post: this.props})}>
          <Image source={{ uri: this.props._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url}} style={styles.photo}/>
        </TouchableHighlight>
        <Text style={styles.text} onPress={() => this.props.navigation.navigate('Content', {post: this.props})}>
          {title}
        </Text>
      </View>
    );
  }
};

export default Row;
