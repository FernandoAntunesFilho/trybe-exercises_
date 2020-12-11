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
  
  switch (action.type) {
    case 'ADD_NAME':
      return Object.assign({}, state, { 'nome': action.value });
    default:
      return state;
  }
}

export default listReducer;