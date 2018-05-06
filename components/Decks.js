import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  FlatList,
  StatusBar,
  TouchableOpacity
} from "react-native";
import { fetchDecks } from "../utils/api";
import { connect } from "react-redux";
import { getDecks, addCard } from "../actions";
import { purple, white } from "../utils/colors";
import { AppLoading } from "expo";
import DeckDetail from "./DeckDetail";
import DeckItem from "./DeckItem";

class Decks extends Component {
  state = {
    ready: false
  };

  componentDidMount() {
    this.props.getDecks();
    this.setState(() => ({ ready: true }));
  }

  renderItem = ({ item }) => (
    <View style={styles.item}>
      {console.log(item)}
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("DeckDetail", item)}
      >
        <DeckItem item={item} />
      </TouchableOpacity>
    </View>
  );

  render() {
    const { decks } = this.props;

    const { ready } = this.state;

    if (ready === false) {
      return <AppLoading />;
    }
    //     keyExtractor={item => item.title}
    {
      console.log(decks);
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={Object.values(decks)}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: white,
    borderRadius: Platform.OS === "ios" ? 16 : 2,
    //padding: 15,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    justifyContent: "center",
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    }
  },
  noDataText: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20
  }
});

function mapStateToProps(decks) {
  return {
    decks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDecks: () => dispatch(getDecks())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Decks);
