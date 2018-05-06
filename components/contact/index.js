import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements'
import Communications from 'react-native-communications';

class NameInput extends React.Component {
  render() {
    return (
      <View>
        <FormLabel
          containerStyle={styles.container}>Name</FormLabel>
        <FormInput
          containerStyle={styles.inputContainer}
          inputStyle={styles.input}
          editable={true}
          {...this.props}/>
      </View>
    );
  }
}

class MessageInput extends React.Component {
  render() {
    return (
      <View>
        <FormLabel
          containerStyle={styles.container}>Message</FormLabel>
        <FormInput
          containerStyle={styles.inputContainer}
          inputStyle={styles.input}
          editable={true}
          {...this.props}/>
      </View>
    );
  }
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Your Name',
      message: 'I\'ve got this great idea...'
    };
  }

  render() {
    const sendEmail = function(name, body) {
      var cc, bcc;
      return Communications.email(['ben@jarrellsystems.com'], cc || null, bcc || null, 'New idea from ' + name + '!', body || null);
    };

    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Tell us about your idea</Text>

        <NameInput
          value={this.state.name}
          onChangeText={(name) => this.setState({name})} />

        <MessageInput
          value={this.state.message}
          multiline = {true}
          numberOfLines = {6}
          onChangeText={(message) => this.setState({message})}/>

        <Button
          raised
          large
          iconLeft
          onPress={() => sendEmail(this.state.name, this.state.message)}
          buttonStyle={styles.button}
          title="Submit"
          icon={{name: 'send'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: -1,
    width: '100%',
    maxWidth: '98%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 24,
    height: 80,
    backgroundColor: '#20364C',
    flex: 0,
    width: '100%',
    alignSelf: 'center',
  },
  input: {
    flex: -1,
    width: '100%',
  },
  inputContainer: {
    flex: -1,
    width: '100%',
    maxWidth: '90%',
    paddingLeft: 8,
    paddingRight: 8
  },
  h1: {
    fontSize: 32,
    alignSelf: 'center'
  }
});
