import {
  FETCH_DECKS,
  ADD_DECK,
  ADD_CARD,
  ADD_QUESTION,
  REMOVE_DECK
} from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    
    case "FETCH_DECKS":
      return {
        ...state,
        ...action.decks
      };

    case "ADD_DECK":
      return {
        ...state,
        [action.deck.title]: action.deck
      };

    case 'REMOVE_DECK':
      return { ...action.decks };

    case "ADD_CARD":
      const { deckName, card } = action;
      deck = state[deckName];
      const questions = deck.questions.concat(card);
      return {
        ...state,
        [deckName]: { ...deck, questions }
      };

    default:
      return state;
  }
}
