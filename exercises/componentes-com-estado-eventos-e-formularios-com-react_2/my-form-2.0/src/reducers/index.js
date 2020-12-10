const INITIAL_STATE = {
  cargo: '',
  cidade: '',
  cpf: '',
  descricaoCargo: '',
  email: '',
  endereco: '',
  estado: '',
  nome: '',
  resumoCurriculo: '',
  tipo: '',
};

function listReducer(state = INITIAL_STATE, action) {
  const { field, value } = action;
  switch (action.type) {
    case 'ADD_DATA':
      return Object.assign({}, state, {field: value});
    default:
      return state;
  }
}

export default listReducer;