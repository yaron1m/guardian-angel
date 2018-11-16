import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'About',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
          <Text style={{padding: 10}}>Guardian Angel app from Facebook Hackton 2018</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
