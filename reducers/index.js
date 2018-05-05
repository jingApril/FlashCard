import { FETCH_DECKS, ADD_DECK, ADD_CARD, ADD_QUESTION } from "../actions"


export default function (state = {}, action){
	switch (action.type) {

		case 'FETCH_DECKS':
			return {
				...state,
				...action.decks,
			}

		case 'ADD_DECK':

			return{
				...state,
				...action.deck,
			}

			//decks[newDeck.title] = newDeck
	     // {console.log(action.deck)}
		case 'ADD_CARD' :
          const { deckName, card } = action

          deck = state[deckName]
          const questions = deck.questions.concat(card)

          return {
              ...state,
              [deckName]: { ...deck, questions }
          }

		default :
			return state
	}
}
