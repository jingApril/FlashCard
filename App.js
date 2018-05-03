import React from 'react'
import { View,Text, StyleSheet, Platform, StatusBar} from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { Provider } from 'react-redux'
import reducer from './reducers'

import  { TabNavigator, StackNavigator } from 'react-navigation'
import {purple, white, red, blue } from './utils/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'

import Decks from './components/Decks'
import NewDeck from './components/NewDeck'
import AddCard from './components/AddCard'
import DeckDetail from './components/DeckDetail'
import DeckItem from './components/DeckItem'
import Quiz from './components/Quiz'


function UdaciStatusBar ({backgroundColor, ...props}){
  return (
    <View style = {{ backgroundColor, height: Constants.statusBarHeight}}>
        <StatusBar transslucent backgroundColor={backgroundColor}  {...props}/>
    </View>
  )
}

const Tabs = TabNavigator({
    Decks: {
      screen: Decks,
     navigationOptions:{
        tabBarLabel: 'DECKS',
       tabBarIcon: ({ tintColor }) => <FontAwesome name='quora' size={30} color={tintColor} />
      },
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'NEW DECK',
        tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
      },
    },
  },{
      navigationOptions: {
        header: null
      },
      tabBarPosition: 'top',
      tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? purple : white,
        style: {
          height: 56,
          backgroundColor: Platform.OS === 'ios' ? white : purple,
          shadowColor: 'rgba(0, 0, 0, 0.24)',
          shadowOffset: {
            width: 0,
            height: 3
          },
          shadowRadius: 6,
          shadowOpacity: 1
      }
  }
})


const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  }
});

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <UdaciStatusBar backgroundColor={blue} barStyle='light-content' />
                <MainNavigator />
            </View>
        </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
