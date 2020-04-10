import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SwipeCards from "react-native-swipe-cards";

class Card extends React.Component {
  render() {
    return (
      <View style={styles.Card}>
        <Text style={styles.text}>{this.props.joke}</Text>
      </View>
    );
  }
}

class NoMoreCards extends React.Component {
  render() {
    return (
      <View style={styles.Card}>
        <Text style={styles.text}>No Jokes To Show</Text>
      </View>
    );
  }
}

export default class CardSwipe extends React.Component {
  handleAccept() {
    console.log("I like this joke");
  }

  handleNope() {
    console.log("I hate this joke");
  }

  render() {
    return (
      <SwipeCards
        cards={this.props.jokes}
        renderCard={(jokeObject) => <Card joke={jokeObject.joke} />}
        renderNoMoreCards={() => <NoMoreCards />}
        handleYup={this.handleAccept}
        handleNope={this.handleNope}
      />
    );
  }
}

const styles = StyleSheet.create({
  Card: {
    width: 300,
    height: 300,
    borderRadius: 10,
    borderColor: "#ea394b",
    borderWidth: 2,
    backgroundColor: "#04b1ff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
    padding: 5,
  },
  text: {
    fontSize: 20,
    fontStyle: "normal",
  },
});
