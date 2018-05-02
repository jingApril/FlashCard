import React from 'react'
import { AsyncStorage } from 'react-native'
//import { formatCalendarResults, DECK_STORAGE_KEY } from './_calendar'


export const DECK_STORAGE_KEY = 'decks:react-native-flashcards'

let data = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}




export function getDecks () {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
      .then((results)=>{
        return results === null ? initialData() : JSON.parse(results)
      })
}


export function initialData() {
    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data));
    return data;
}

export function submitEntry ({ entry, key}) {
  return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
	  [key]:entry
  }))
}

export function removeEntry (key) {
	return AsyncStorage.getItem (CALENDAR_STORAGE_KEY).then((results) => {
		const data = JSON.parse(results)
		data[key] = undefined
		delete data[key]
		AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
	})
}
