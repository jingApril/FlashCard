import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, StatusBar} from 'react-native'
import { purple, white } from '../utils/colors'
import { connect } from 'react-redux'

class Decks extends Component {

    render() {
        return (
          <Text style={{color: purple, fontSize: 25}}>
              Decks
          </Text>
        )
    }

}

const styles = StyleSheet.create({
  item: {
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
  noDataText: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20
  }
})


function mapStateToProps (cards) {
  return {
    cards
  }
}

export default connect(mapStateToProps,)(Decks)
