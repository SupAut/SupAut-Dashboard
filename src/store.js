/**
 * This file creates and exports a Redux store instance for managing the application's state.
 * The store handles the `sidebarShow` state property and can be extended as needed.
 * For more information on Redux, see https://redux.js.org/.
 */

import { createStore } from 'redux'

const initialState = {
  sidebarShow: true,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
