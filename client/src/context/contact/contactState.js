import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAT_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Chattavat Vattanasiri',
        email: 'chattavat.psu@gmail.com',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Red Skull',
        email: 'red.skull@gmail.com',
        type: 'professional'
      },
      {
        id: 3,
        name: 'Caption Hook',
        email: 'cap.hook@gmail.com',
        type: 'personal'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contact

  // Clear Filter

  return (
    <ContactContext.Provider
      value = {{
        contacts: state.contacts
      }}
    >
      { props.children }
    </ContactContext.Provider>
  )
};

export default ContactState;