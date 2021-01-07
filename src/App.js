import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form/Form";
import Contacts from "./components/Contacts/Contacts";
import Filter from "./components/Filter/Filter";
import Notification from "./components/Notification/Notification";
import store from "./redux/store";
import { connect } from "react-redux";

const App = function ({ contacts }) {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   const contacts = localStorage.getItem("contacts");
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const checkContact = (name, number) => {
  //   const checkedContacts = contacts.some((el) => el.contactName === name);
  //   if (checkedContacts) {
  //     return alert("This contact is already in your contacts");
  //   }
  //   addContact(name, number);
  // };

  // const addContact = (name, number) => {
  //   const newContactData = {
  //     id: uuidv4(),
  //     contactName: name,
  //     number: number,
  //   };
  //   setContacts((prevState) => [newContactData, ...prevState]);
  // };

  // const deleteContact = (id) => {
  //   setContacts((state) => state.filter((el) => el.id !== id));
  // };

  // const filterContacts = (e) => {
  //   const { value } = e.target;
  //   setFilter(value);
  // };

  return (
    <div className="container">
      <Form />
      {contacts.length ? <Contacts /> : <Notification />}
      <Filter />
    </div>
  );
};

const mapStateToProps = ({ contacts }) => ({
  contacts: contacts,
});

export default connect(mapStateToProps)(App);
