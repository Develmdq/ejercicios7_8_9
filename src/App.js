import { useState } from "react";
import NewContact from "./components/NewContact";
import ListContact from "./components/ListContact";
import { listContact } from "./db/listContact";
import "./App.css";


const App = () => {
  const [contacts, setContact] = useState(listContact);
  const contactDelete = (contactId) => {
    const newList = contacts.filter((contact) => contact.id !== contactId);
    setContact(newList);
  };

  const contactState = (contactId) => {
    const newState = contacts.map((contact) =>
      contact.id === contactId
        ? { ...contact, isConected: !contact.isConected }
        : contact
    );
    setContact(newState);
  };

  const contactAdd = (contact) => {
    const newContact = {
      ...contact,
      id: Date.now(),
      isConected: false,
    };
    const newList = [...contacts, newContact];
    setContact(newList);
  };
  
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-around">
        <div className="col-5">
          <h1 className="text-center mb-4 text-primary">New Contact</h1>
          <hr />
          <NewContact contactAdd={contactAdd} />
        </div>
        <div className="col-5">
          <h1 className="text-center mb-4 text-primary">Contacts</h1>
          <hr />
          <ListContact
            contacts={contacts}
            contactDelete={contactDelete}
            contactState={contactState}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
