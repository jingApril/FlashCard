import React from 'react'
import { Text,View, TouchableOpacity, StyleSheet, Platform,
  Alert } from 'react-native'

import { purple,white,gray,pink,black,green,red } from '../utils/colors'
import NavigationBar from 'react-native-navbar';
import { fetchDecks, newCard, removeDeck} from '../utils/api'

import DeckItem from './DeckItem'
import { connect } from 'react-redux'
import { addCard, getDecks} from  '../actions'

import AddCard from './AddCard'
import TextButton from './TextButton'

class DeckDetail extends React.Component {

   static navigationOptions =({ navigation }) =>{
      const {title} = navigation.state.params
      return  {
         title
      }
   }


   removeDeck = () => {
		const { dispatch, title } = this.props
		console.log(title)
		Alert.alert('Delete', 'Are you sure you want to remove this Deck?',
			[
			 	{
			 		text: 'No', onPress: () => {}
			 	},
			 	{
			 		text: 'Yes', onPress: () => {
			 			removeDeck(title)
			 			this.props.navigation.goBack()
			 		}
			 	}
			])
	}


  render(){

    const { item, title } = this.props

    return (
      <View style={styles.container}>
          <DeckItem item = {item}/>
          <TouchableOpacity
              onPress ={() => this.props.navigation.navigate('AddCard',  item )}
              style={Platform.OS === 'ios' ? [styles.iosSubmitBtn,{backgroundColor: white}]: [styles.AndroidSubmitBtn,{backgroundColor: white}]}
          >
              <TextButton style={{color: purple}}>Add Card</TextButton>
          </TouchableOpacity>





          {item.questions.length > 0 ?
             (
               <TouchableOpacity
                   onPress ={() => this.props.navigation.navigate('Quiz',  item )}
                   style={Platform.OS === 'ios' ? [styles.iosSubmitBtn,{backgroundColor: purple}] :
                   [styles.AndroidSubmitBtn,{backgroundColor: purple}]}
               >
                   <TextButton
                       style={{color: white}}>Start Quiz
                   </TextButton>
               </TouchableOpacity>

             )
             :
             ( <Text>No questions in this deck. Add cards first.</Text> )
           }
             <TouchableOpacity
                 onPress={this.removeDeck}
                 style={Platform.OS === 'ios' ? [styles.iosSubmitBtn,{backgroundColor: purple}] :
                 [styles.AndroidSubmitBtn,{backgroundColor: purple}]}
             >
                 <TextButton
                     style={{color: white}}>Remove Deck
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
  	return 	{
        title,
        item: state[title],
    }

}


export default connect(mapStateToProps) (DeckDetail)
