import * as constants from './constants'

const fetchStores = payload => ({ payload, type: constants.FETCH_STORES })
const fetchStoresSuccess = payload => ({ payload, type: constants.FETCH_STORES_SUCCESS })
const fetchStoresFailure = payload => ({ payload, type: constants.FETCH_STORES_FAILURE })
