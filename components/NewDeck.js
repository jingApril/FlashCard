import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Dimensions,
  Platform,
  StatusBar,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import {
  purple,
  white,
  black,
  gray,
  pink,
  red,
  green,
  deeppink
} from "../utils/colors";

import TextButton from "./TextButton";
import { addDeck } from "../actions";

function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        Platform.OS === "ios"
          ? [styles.iosSubmitBtn, { backgroundColor: purple }]
          : [styles.AndroidSubmitBtn, { backgroundColor: green }]
      }
    >
      <TextButton style={{ color: white }}>SUBMIT</TextButton>
    </TouchableOpacity>
  );
}

class NewDeck extends React.Component {
  state = {
    title: "",
    questions: []
  };

  // toHome = () => {
  //         this.props.navigation.navigate('Decks',{ deckName: this.state.title })
  //     }

  submit = () => {
    if (this.state.title) {
      // save  to  "DB"
      const deck = {
        title: this.state.title,
        questions: []
      };
      this.props.saveDeck(deck);
      this.props.navigation.goBack();
    }
  };

  render() {
    const { title } = this.state;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.text}>What is the title of your new deck</Text>
        <TextInput
          style={styles.Input}
          onChangeText={input => this.setState({ title: input })}
          value={title}
        />
        <SubmitBtn onPress={this.submit} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",

    justifyContent: "center"
  },
  iosSubmitBtn: {
    padding: 10,
    borderRadius: 7,
    height: 50,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20
  },
  AndroidSubmitBtn: {
    padding: 10,
    borderRadius: 2,
    height: 50,
    paddingLeft: 30,
    paddingRight: 30,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  Input: {
    margin: 15,
    height: 40,
    marginRight: 40,
    marginLeft: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 2
  },
  text: {
    fontSize: 30,
    marginRight: 40,
    marginLeft: 40
  }
});

function mapDispatchToProps(dispatch) {
  return {
    saveDeck: deck => dispatch(addDeck(deck))
  };
}

export default connect(null, mapDispatchToProps)(NewDeck);
