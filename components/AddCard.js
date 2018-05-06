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
import { purple, white, black, gray, pink, red, green } from "../utils/colors";

import TextButton from "./TextButton";
import { addCard } from "../actions";

function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        Platform.OS === "ios"
          ? [styles.iosSubmitBtn, { backgroundColor: purple, marginTop: 20 }]
          : [
              styles.AndroidSubmitBtn,
              { backgroundColor: purple, marginTop: 20 }
            ]
      }
    >
      <TextButton style={{ color: white }}>SUBMIT</TextButton>
    </TouchableOpacity>
  );
}

class AddCard extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title} AddCard`
  });

  state = {
    question: "",
    answer: ""
  };

  submit = () => {
    if (this.state.question && this.state.answer) {
      const deckName = this.props.navigation.state.params.title;
      const card = {
        question: this.state.question,
        answer: this.state.answer
      };

      this.props.saveCard(deckName, card);
      this.props.navigation.goBack();
      console.log(deckName);
      console.log(card);
    }
    // save  to  "DB"

    // clearn local notification
  };

  render() {
    const { question, answer } = this.state;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.text}>Question:</Text>
        <TextInput
          style={styles.Input}
          onChangeText={question => this.setState({ question })}
          value={question}
          clearTextOnFocus={true}
        />

        <Text style={styles.text}>Answer:</Text>
        <TextInput
          style={styles.Input}
          onChangeText={answer => this.setState({ answer })}
          value={answer}
        />
        <SubmitBtn onPress={this.submit} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch"
    //   justifyContent: 'center',
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
    //  margin: 15,
    height: 40,
    marginRight: 40,
    marginLeft: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 2
  },
  text: {
    fontSize: 30,
    justifyContent: "center",
    marginLeft: 40,
    marginTop: 20,
    marginBottom: 10
  }
});

function mapStateToProps(state, { navigation }) {
  const { title } = navigation.state.params;
  return {
    title
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveCard: (deckName, card) => dispatch(addCard(deckName, card))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);
