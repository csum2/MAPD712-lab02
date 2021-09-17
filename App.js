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
  View,
} from 'react-native';

const App: () => Node = () => {
  const [value, onChangeText] = 	React.useState('Type something here');

  onPress = () => {
    onChangeText('')
  }

  return (
    <SafeAreaView>
      <View>
        <TextInput style={styles.editContainer}
          onChangeText={text => onChangeText(text)}
          clearTextOnFocus={true}
          value={value}
          />
        <Text>{value}</Text>
        <Button
	        onPress={this.onPress}
	        title="Clear"
	        accessibilityLabel= "Clear Button"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  editContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: 'black',
    borderWidth: 2
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default App;
