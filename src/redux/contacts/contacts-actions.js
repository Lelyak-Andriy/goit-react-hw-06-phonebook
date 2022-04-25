import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add');
const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/changeFilter');

const actions = {
  addContact,
  deleteContact,
  changeFilter,
};
export default actions;
