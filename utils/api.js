import React from 'react'
import { AsyncStorage } from 'react-native'

export const DECKS_STORAGE_KEY = '@MySuperStore:key'

const initialDecks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is Apple?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      },
      {
        question: 'aa',
        answer: 'AA'
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
          //    AsyncStorage.clear(JSON.stringify(initialDecks));
           AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initialDecks));
          return initialDecks;
        }
        return JSON.parse(result);
      })
}

export function addCardToDeck (deckName, card){
    return fetchDecks()
        .then((decks) => {
            decks[deckName].questions.push(card)
            return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
        })
}

// export function saveDeckTitle (newDeck){
//     return fetchDecks()
//         .then((decks) => {
//           console.log(decks)
//             decks[newDeck.title] = newDeck
//             return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
//
//         })
// }


export function saveDeckTitle (deck) {
	return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck))
}


export function removeDeck (title) {

	return AsyncStorage.getItem(DECKS_STORAGE_KEY)
	.then((result) => {
		const data = JSON.parse(result)
		data[title] = undefined
		delete data[title]
		AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
	})
}
