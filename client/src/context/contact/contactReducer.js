import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAT_FILTER
} from '../types';

export default (state, action) => {
  switch(action.type) {
    case ADD_CONTACT:
      console.log(...state.contacts);
      console.log(action.payload);
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }
    default:
      return state;
  }
}