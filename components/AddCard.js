import React from 'react'
import { View, Text, StyleSheet,  Dimensions, Platform, StatusBar, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { purple,white,black,gray,pink,red,green } from '../utils/colors'
import { fetchDecks } from '../utils/api'
import TextButton from './TextButton'

class AddCard extends React.Component{

static navigationOptions = ({ navigation }) => ({
   title: `${navigation.state.params.title} AddCard`
 });
    state = {
		question: '',
        answer: '',

	}

	render () {

		return(
            <View style={styles.container}>

                <Text style={styles.stat}>{`${counter + 1}/${questions.length}`}</Text>

                <Text style={styles.question}>
                    {answer ? questions[counter].answer :
                    questions[counter].question}
                </Text>

                <TouchableOpacity onPress={this.answer}>
                    <Text style={styles.answer}>{answer ? `Hide answer` : `answer`}</Text>
                </TouchableOpacity>

                <View style={styles.container}>

                    <TouchableOpacity
                        onPress ={this.onCorrect}
                        style={Platform.OS === 'ios' ? [styles.iosSubmitBtn,{backgroundColor: green}]: [styles.AndroidSubmitBtn,{backgroundColor: green}]}
                    >
                        <TextButton style={{color: white}}>Correct</TextButton>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress ={this.onIncorrect}
                        style={Platform.OS === 'ios' ? [styles.iosSubmitBtn,{backgroundColor: red}]: [styles.AndroidSubmitBtn,{backgroundColor: red}]}
                    >
                        <TextButton style={{color: white}}>Incorrect</TextButton>
                    </TouchableOpacity>

                </View>

            </View>
			)
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
        alignItems: 'stretch',
	},
    iosSubmitBtn: {
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
    stat: {
    	fontSize: 22,
    	color: black,
    	marginBottom: 20,
        marginLeft: 10,
    },
	question: {
		alignSelf: 'center',
        fontSize: 32,
        padding: 20,
        fontWeight: 'bold',
    	color: black,
	},
    answer: {
        alignSelf: 'center',
    	fontSize: 22,
        color: red,
    	marginBottom: 40,
    },
	score: {
    	fontSize: 22,
    	color: black,
        textAlign: 'center',
		marginTop: 10,
		marginBottom: 20,
    },
    qna: {
    	color: white,
    	fontSize: 20,
    	textAlign: 'center',
    },

})


function mapStateToProps (state, {navigation}) {
  const { title } = navigation.state.params
  	return 	{
        title
    }

}
export default connect(mapStateToProps) (AddCard)
