const INITIAL_STATE = {
  champions: [],
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'GET_CHAMPIONS':
    return {
      ...action.champions
    }
    default:
      return state;
  }
}
