const INITIAL_STATE = {
  email: null,
  password: null,
};

function userReducer(state = INITIAL_STATE, action) {
  
  switch (action.type) {
    case 'ADD_EMAIL':
      return Object.assign({}, state, { email: action.value, });
    case 'ADD_PASSWORD':
      return Object.assign({}, state, { password: action.value, });
    case 'REMOVE_USER':
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default userReducer;