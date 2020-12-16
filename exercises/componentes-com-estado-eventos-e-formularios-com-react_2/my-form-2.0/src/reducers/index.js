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
    case 'ADD_EMAIL':
      return Object.assign({}, state, { 'email': action.value });
    case 'ADD_CPF':
      return Object.assign({}, state, { 'cpf': action.value });
    case 'ADD_ENDERECO':
      return Object.assign({}, state, { 'endereco': action.value });
    case 'ADD_CIDADE':
      return Object.assign({}, state, { 'cidade': action.value });
    case 'ADD_ESTADO':
      return Object.assign({}, state, { 'estado': action.value });
    case 'ADD_TIPO':
      return Object.assign({}, state, { 'tipo': action.value });
    case 'ADD_RESUMOCURRICULO':
      return Object.assign({}, state, { 'resumoCurriculo': action.value });
    case 'ADD_CARGO':
      return Object.assign({}, state, { 'cargo': action.value });
    case 'ADD_DESCRICAOCARGO':
      return Object.assign({}, state, { 'descricaoCargo': action.value });
    default:
      return state;
  }
}

export default listReducer;