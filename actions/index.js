import {
  fetchDecks,
  addCardToDeck,
  saveDeckTitle,
  deleteDeck
} from "../utils/api";

export const FETCH_DECKS = "FETCH_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
export const REMOVE_DECK = "REMOVE_DECK";

export const receiveDecks = decks => ({
  type: FETCH_DECKS,
  decks
});

export const getDecks = () => dispatch =>
  fetchDecks().then(decks => dispatch(receiveDecks(decks)));

export const addCard = (deckName, card) => dispatch =>
  addCardToDeck(deckName, card).then(() =>
    dispatch({
      type: ADD_CARD,
      deckName,
      card
    })
  );

export const addDeck = deck => dispatch => {
  saveDeckTitle(deck).then(() =>
    dispatch({
      type: ADD_DECK,
      deck
    })
  );
};





// export const removeDeck =(title,decks) => dispatch => {
//   deleteDeck(title).then((decks) =>
//     dispatch({
//       type: REMOVE_DECK,
//       decks
//     })
//   );
// };


export function removeDeck(title, callback) {
  return dispatch => {
    deleteDeck(title).then(decks => {
      callback();
      dispatch(deleteDeckAsync(JSON.parse(decks)));
    });
  };
}

function deleteDeckAsync(decks) {
  return {
    type: DELETE_DECK,
    decks
  };
}
