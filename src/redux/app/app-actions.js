import actionTypes from "./app-types";
import { v4 as uuidv4 } from "uuid";

const { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACTS } = actionTypes;

const addContact = ({ name, number }) => ({
  type: ADD_CONTACT,
  payload: {
    id: uuidv4(),
    contactName: name,
    number: number,
  },
});

const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

const filterContacts = (text) => ({
  type: FILTER_CONTACTS,
  payload: text,
});

export default {
  addContact,
  deleteContact,
  filterContacts,
};
