import React from "react";
import { AsyncStorage } from "react-native";
import _ from "lodash";

export const DECKS_STORAGE_KEY = "@MySuperStore:key";

const initialDecks = {
  React: {
    title: "React",
    questions: [
      {
        question: "What is Apple?",
        answer: "A library for managing user interfaces"
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event"
      }
    ]
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared."
      }
    ]
  }
};

export function fetchDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(decks => {
    if (decks === null) {
      //    AsyncStorage.clear(JSON.stringify(initialDecks));
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initialDecks));
      return initialDecks;
    }
    return JSON.parse(decks);
  });
}

export function addCardToDeck(deckName, card) {
  return fetchDecks().then(decks => {
    decks[deckName].questions.push(card);
    return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
  });
}

export function saveDeckTitle(newDeck) {
  return fetchDecks().then(decks => {
    console.log(decks);
    decks[newDeck.title] = newDeck;
    return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
  });
}

export function deleteDeck(title) {
  return fetchDecks()
    .then(result => {
      let decks = JSON.parse(result);
      let newDecks = _.omit(decks, title);
      return newDecks;
    })
    .then(updatedDeck => {
      AsyncStorage.setItem(STORE_KEY, JSON.stringify(updatedDeck));

      return JSON.stringify(updatedDeck);
    });
}
