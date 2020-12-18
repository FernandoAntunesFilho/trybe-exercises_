const INITIAL_STATE = [{
  name: 'Fernando',
  age: 37,
  email: 'gmail',
},
{
  name: 'Talita',
  age: 36,
  email: 'hotmail',
},
{
  name: 'Davi',
  age: 4,
  email: 'bol',
}];

function customerReducer(state = INITIAL_STATE, action) {
  
  switch (action.type) {
    case 'ADD_CUSTOMER':
      return [...state, { name: action.name, age: action.age, email: action.email }];
    case 'REMOVE_CUSTOMER':
      return state.filter((item, index) => index !== action.id);
    case 'SORT_CUSTOMER':
      return action.clientes;
    default:
      return state;
  }
}

export default customerReducer;