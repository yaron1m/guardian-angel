import React from 'react';
import {StyleSheet, View,} from 'react-native';
import ScreenSelectorContainer from './ScreenSelectorContainer';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Guardian Angel",
  };

  render() {
    return (
      <View style={styles.container}>
          <ScreenSelectorContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
