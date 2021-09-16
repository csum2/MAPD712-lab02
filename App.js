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

  return (
    <SafeAreaView>
      <View>
        <TextInput style={styles.editContainer}
          onChangeText={text => onChangeText(text)}
          clearTextOnFocus={true}
          value={value}
          />
        <Text>{value}</Text>
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
});

export default App;
