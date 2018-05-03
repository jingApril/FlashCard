import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { purple,white,gray } from '../utils/colors'
import { connect } from 'react-redux'
import { addCard } from  '../actions'
import { newCard } from '../utils/api'

import AddCard from './AddCard'
import TextButton from './TextButton'

class DeckDetail extends React.Component {


  static navigationOptions =({ navigation }) =>{
      const {title} =navigation.state.params
      return  {
         title
        //title: 'Welcome',
      }

  }


render(){
    return (
      <View style={styles.row}>
        <Text style={{color: purple, fontSize: 25}}>
      		Deckdetail
          </Text>
          <TextButton style={[styles.submitBtnText, {backgroundColor: gray}]}>Add Card</TextButton>
          <TextButton style={styles.submitBtnText}>Start Quiz</TextButton>
      </View>
    )
}

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:20,
        backgroundColor: white
    },
    row:{
        flex: 1,
        alignItems: 'center',
    },
    iosSubmitBtn: {
        backgroundColor: purple,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
    },
    AndroidSubmitBtn:{
        backgroundColor: purple,
        padding: 10,
        borderRadius: 2,
        height: 45,
        paddingLeft: 30,
        paddingRight: 30,
        alignSelf: "flex-end",
        justifyContent: 'center',
        alignItems: "center",
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    },
    center:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight:30,
    },
})



function mapStateToProps (state, {navigation}) {
  const { title } = navigation.state.params
  	return 	{
      title
    }
   console.log(title)
}

export default connect(mapStateToProps) (DeckDetail)
