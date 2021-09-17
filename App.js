/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Switch,
  View,
} from 'react-native';

const App: () => Node = () => {
  const [value, onChangeText] = 	React.useState('Type something here');
  const [isDarked, setIsDarked] = React.useState(false);
  const toggleSwitch = () => setIsDarked(previousState => !previousState);

  onPress = () => {
    onChangeText('')
  }

  toggleBgdColor = () => {
    toggleSwitch
  }

  return (
    <SafeAreaView>
      <View style={isDarked ? styles.darkContainer : styles.lightContainer}>
      <View style={{ height: '100%' }}>
        <TextInput style={isDarked ? styles.darkEditContainer : styles.lightEditContainer}
          onChangeText={text => onChangeText(text)}
          clearTextOnFocus={true}
          value={value}
          />
        <Text style={isDarked ? styles.darkContainer : styles.lightContainer}>
          {value}
        </Text>
        <Button style={styles.button}
	        onPress={this.onPress}
	        title="Clear"
	        accessibilityLabel= "Clear Button"
        />
        <View style={styles.centerContainer}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDarked ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isDarked}
            onChange={this.toggleBgdColor}
            />
          </View>
      </View></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  lightEditContainer: {
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    borderColor: "black",
    borderWidth: 2
  },
  darkEditContainer: {
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    borderColor: "white",
    borderWidth: 2
  },
  lightContainer: {
    backgroundColor: "white",
    color: "black",
  },
  darkContainer: {
    backgroundColor: "black",
    color: "white",
  },
  centerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 20,
  },
});

export default App;
