import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image, Button } from "react-native";

export default class App extends Component {
  state = {
    activeDice: require("./src/images/dice1.png")
  };
  getRandomValue = () => {
    return Math.floor(Math.random() * 6) + 1;
  };
  changeDice = () => {
    console.log(this.getRandomValue());
    switch (this.getRandomValue()) {
      case 1:
        this.setState({ activeDice: require("./src/images/dice1.png") });
        break;
      case 2:
        this.setState({ activeDice: require("./src/images/dice2.png") });
        break;
      case 3:
        this.setState({ activeDice: require("./src/images/dice3.png") });
        break;
      case 4:
        this.setState({ activeDice: require("./src/images/dice4.png") });
        break;
      case 5:
        this.setState({ activeDice: require("./src/images/dice5.png") });
        break;
      case 6:
        this.setState({ activeDice: require("./src/images/dice6.png") });
        break;

      default:
        this.setState({ activeDice: require("./src/images/dice4.png") });

        break;
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.activeDice} />
        <Button
          onPress={() => {
            this.changeDice();
          }}
          style={{
            fontSize: 32
          }}
          fontSize="40"
          title=" Roll The Dice"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3C40C6"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
