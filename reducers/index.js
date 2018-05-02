import {
  FETCH_DECKS,
  ADD_DECK,
  ADD_CARD,
  ADD_QUESTION
} from "../actions";

function alldecks (state = {}, action){
	switch (action.type) {
		case 'FETCH_DECK':
			return {
				...state,
				...action.decks,
			}
		case 'ADD_DECK':
			return{
				...state,
				...action.deck,
			}
		case 'ADD_CARD':
			return{
				...state,
				...action.card,
			}
		case 'ADD_QUESTION':
			return{
				...state,
				...action.question,
			}
		default :
			return state
	}
}

export default alldecks
