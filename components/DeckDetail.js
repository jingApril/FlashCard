import React from 'react'
import { Text,View, TouchableOpacity, StyleSheet, Platform } from 'react-native'

import { purple,white,gray,pink,black,green,red } from '../utils/colors'
import NavigationBar from 'react-native-navbar';
import { fetchDecks } from '../utils/api'

import DeckItem from './DeckItem'
import { connect } from 'react-redux'
import { addCard } from  '../actions'
import { newCard } from '../utils/api'

import AddCard from './AddCard'
import TextButton from './TextButton'

class DeckDetail extends React.Component {

   static navigationOptions =({ navigation }) =>{
      const {title} = navigation.state.params
      return  {
         title
      }
   }

  render(){

    const { item } = this.props

{  console.log(item)}
    return (
      <View style={styles.container}>
          <DeckItem item = {item}/>

          <TouchableOpacity
              onPress ={() => this.props.navigation.navigate('AddCard', item)}
              style={Platform.OS === 'ios' ? [styles.iosSubmitBtn,{backgroundColor: white}]: [styles.AndroidSubmitBtn,{backgroundColor: white}]}
          >
              <TextButton style={{color: purple}}>Add Card</TextButton>
          </TouchableOpacity>

          <TouchableOpacity
              onPress ={() => this.props.navigation.navigate('Quiz', item)}
              style={Platform.OS === 'ios' ? [styles.iosSubmitBtn,{backgroundColor: purple}] :
              [styles.AndroidSubmitBtn,{backgroundColor: purple}]}
          >
              <TextButton
                  style={{color: white}}>Start Quiz
              </TextButton>
          </TouchableOpacity>

      </View>
    )
}

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:20,
    },
    iosSubmitBtn: {
        borderColor: purple,
        borderWidth: 2,
        padding: 10,
        borderRadius: 7,
        height: 50,
        marginLeft: 40,
        marginRight: 40,
        marginTop:20,
    },
    AndroidSubmitBtn:{
        padding: 10,
        borderRadius: 2,
        height: 50,
        paddingLeft: 30,
        paddingRight: 30,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 20,
    },
})


function mapStateToProps (state, {navigation}) {
  const { title } = navigation.state.params
    console.log(navigation.state.params)
    console.log(state[title])
  	return 	{
        title,
        item: state[title],
    }

}

// function  mapDispatchToProps (dispatch, {navigation}){
//  const {title} = navigation.state.params
// }

export default connect(mapStateToProps) (DeckDetail)
