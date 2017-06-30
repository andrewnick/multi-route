// ------------------------------------
// Constants
// ------------------------------------
export const MAP_FETCH_REQUEST = 'MAP_FETCH_REQUEST'
export const MAP_FETCH_FAILURE = 'MAP_FETCH_FAILURE'
export const MAP_FETCH_SUCCESS = 'MAP_FETCH_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------
export function mapRequest (value = true) {
  return {
    type    : MAP_FETCH_REQUEST,
    payload : value
  }
}

export function mapFailure (value = true) {
  return {
    type    : MAP_FETCH_FAILURE,
    payload : false
  }
}

export function mapSuccess (value = true) {
  return {
    type    : MAP_FETCH_SUCCESS,
    payload : true
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

// export const doubleAsync = () => {
//   return (dispatch, getState) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         dispatch({
//           type    : COUNTER_DOUBLE_ASYNC,
//           payload : getState().counter
//         })
//         resolve()
//       }, 200)
//     })
//   }
// }

export const actions = {
  mapRequest,
  mapFailure,
  mapSuccess,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [MAP_FETCH_REQUEST] : (state, action) => Object.assign({}, state, {
    loading: action.payload
  }),
  [MAP_FETCH_FAILURE] : (state, action) => Object.assign({}, state, {
    loading: action.payload
  }),
  [MAP_FETCH_SUCCESS] : (state, action) => Object.assign({}, state, {
    loading: action.payload
  }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: true
}

export default function mapReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
