const INITIAL_STATE = [];

function customerReducer(state = INITIAL_STATE, action) {
  
  switch (action.type) {
    case 'ADD_CUSTOMER':
      return [...state, { name: action.name, age: action.age, email: action.email }];
    default:
      return state;
  }
}

export default customerReducer;