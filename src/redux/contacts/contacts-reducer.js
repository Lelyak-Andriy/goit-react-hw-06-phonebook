import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';
import 'react-toastify/dist/ReactToastify.css';
import toast from '../../helpers/toast';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    const result = state.some(
      contact => contact.name.toLowerCase() === payload.name.toLowerCase(),
    );
    if (result) {
      toast(payload.name);
    } else {
      return [...state, payload];
    }
  },

  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
