import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import Input from "./Component/Input/Input";

export default class App extends React.Component {
  state = {
    value: "",
  };
  render() {
    return (
      <View style={styles.container}>
        <Input
          value={this.state.value}
          onChange={(value) => this.setState({ value: value })}
        />
        <TouchableHighlight style={styles.button}>
          <Text>Search</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
