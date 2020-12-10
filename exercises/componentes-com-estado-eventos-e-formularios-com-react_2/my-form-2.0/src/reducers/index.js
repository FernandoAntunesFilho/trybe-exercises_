const INITIAL_STATE = {
  cargo: 'valor inicial',
  cidade: 'valor inicial',
  cpf: '22233445520',
  descricaoCargo: 'valor inicial',
  email: 'valor inicial',
  endereco: 'valor inicial',
  estado: 'São Paulo (SP)',
  nome: 'valor inicial',
  resumoCurriculo: 'valor inicial',
  tipo: 'valor inicial',
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