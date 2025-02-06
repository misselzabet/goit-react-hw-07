import { createSelector } from '@reduxjs/toolkit';

// Базові селектори
export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.filters.name;;

// Мемоізований селектор
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
