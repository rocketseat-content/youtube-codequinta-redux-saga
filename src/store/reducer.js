const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST_TODO_LIST':
      return { ...state, loading: true };
    case 'SUCCESS_TODO_LIST':
      return { data: action.payload.data, loading: false, error: false };
    case 'FAILURE_TODO_LIST':
      return { data: [], loading: false, error: true };
    default:
      return state;
  }
}
