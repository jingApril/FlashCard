import { fetchDecks, addCardToDeck, saveDeckTitle} from "../utils/api";

export const FETCH_DECKS = "FETCH_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
export const ADD_QUESTION ='ADD_QUESTION'


export const receiveDecks = decks => ({
    type: FETCH_DECKS,
    decks,
});


export const getDecks = () => dispatch =>
  fetchDecks().then(decks => dispatch(receiveDecks(decks,)));



export const addCard = (deckName, card) => dispatch =>
    addCardToDeck(deckName, card)
          .then(() => dispatch({
            type: ADD_CARD,
            card,
}));


export const addDeck = (deck) => dispatch => {
    //const deck = { deck  }
    console.log(deck)
    saveDeckTitle(deck)
      .then(() => dispatch({
          type: ADD_DECK,
          deck,
 }));

}
