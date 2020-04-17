function reducer(state, action) {
  switch (action.type) {
    case 'changeData':
      return {...state, data: action.payload}
    default:
      return state
  }
}

export default reducer
