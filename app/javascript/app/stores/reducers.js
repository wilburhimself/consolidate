import * as constants from './constants'

const initialState = {
  stores: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_STORES_SUCCESS:
      return {
        ...state,
        stores: action.payload
      }
  }
}
