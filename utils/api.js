import React from 'react'
import { AsyncStorage } from 'react-native'

export const DECKS_STORAGE_KEY = '@MySuperStore:key'
const initialDecks = {
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

export function fetchDecks() {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(result => {
        if (result === null) {
          AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initialDecks));
          return initialDecks;
        }
        return JSON.parse(result);
    })
}


export function addCard () {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
           .then(results => JSON.parse(results))
           .then((results) =>  {
               results[title].questions.push(card)
               return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(results))
           })

}


export function addDeck () {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
           .then(results => JSON.parse(results))
           .then((results) =>  {
               results[title].questions.push(card)
               return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(results))
           })

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
