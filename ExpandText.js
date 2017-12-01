//https://github.com/oblador/react-native-collapsible

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import Collapsible from 'react-native-collapsible';

const text = 'Lalala';


export default class Effect extends Component {
  state = {
    collapsed: true,
  };

  _toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableHighlight onPress={this._toggleExpanded}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Single Collapsible</Text>
          </View>
        </TouchableHighlight>

        <Collapsible collapsed={this.state.collapsed} >
          <View style={styles.content}>
            <Text>{text}</Text>
          </View>
        </Collapsible>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  header: {
    backgroundColor: '#abc',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  }
});