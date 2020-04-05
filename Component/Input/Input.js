import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default class Input extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          keyboardType={"numeric"}
          value={this.props.value}
          onChangeText={(text) => this.props.onChange(text)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: 300,
    height: 40,
    borderColor: "gray",
    borderWidth: 2,
  },
});
