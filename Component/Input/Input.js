import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from "react-native";

export default class Input extends React.Component {
  fetchData() {
    fetch(`http://api.icndb.com/jokes/random/${this.props.value}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => this.props.updateJokes(data.value));
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          keyboardType={"numeric"}
          value={this.props.value}
          onChangeText={(text) => this.props.onChange(text)}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.fetchData()}
        >
          <Text style={styles.text}>Search</Text>
        </TouchableHighlight>
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
    margin: 5,
    paddingStart: 10,
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  text: {
    color: "white",
  },
});
