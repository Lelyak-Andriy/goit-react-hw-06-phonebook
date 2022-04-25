export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getFilteredContacts = state => {
  const filter = getFilter(state);
  const contacts = getContacts(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};
