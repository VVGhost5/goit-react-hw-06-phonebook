import { combineReducers } from "redux";
import actionTypes from "./app-types";

const initialState = { contacts: [], filter: "" };

const contacts = (state = initialState.contacts, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_CONTACT: {
      const checkedContacts = state.some(
        (el) => el.contactName === payload.name
      );
      if (checkedContacts) {
        return alert("This contact is already in your contacts");
      }
      return [...state, payload];
    }
    case actionTypes.DELETE_CONTACT: {
      return state.filter((el) => el.id !== payload);
    }

    default:
      return state;
  }
};

const filter = (state = initialState.filter, { type, payload }) => {
  switch (type) {
    case actionTypes.FILTER_CONTACTS: {
      return payload;
    }
    default:
      return state;
  }
};

export default combineReducers({ contacts, filter });
