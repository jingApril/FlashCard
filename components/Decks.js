import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform,FlatList, StatusBar, TouchableOpacity } from 'react-native'
import { fetchDecks } from '../utils/api'
import { connect } from 'react-redux'
import { getDecks, addCard } from '../actions'
import { purple, white } from '../utils/colors'
import { AppLoading } from 'expo'
import DeckDetail from './DeckDetail'
import DeckItem from './DeckItem'
import TitleHeader from './TitleHeader'


class Decks extends Component {

  state = {
      ready: false,
  }

  componentDidMount () {

    const { dispatch } = this.props
    fetchDecks()
        .then((decks) => dispatch(getDecks(decks)))
        .then(() => this.setState(() => ({ready: true})))

  }

  renderItem = ({ item }) => (
   <View style={styles.item}>
       <TouchableOpacity onPress ={() => this.props.navigation.navigate('DeckDetail',item)}>
           {/* <TitleHeader title = {item.title} /> */}
           <DeckItem item = {item}/>
       </TouchableOpacity>
   </View>
 )

    render() {

        const { decks } = this.props
        const { ready } = this.state

        if (ready === false) {
            return <AppLoading />
        }

        return (
            <View style={styles.container}>

                <FlatList
                    data={Object.values(decks)}
                    renderItem={this.renderItem}
                    //renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />



            </View>

        )
    }

}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  paddingTop: 22
 },
  item: {
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 10,
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


function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps,)(Decks)
