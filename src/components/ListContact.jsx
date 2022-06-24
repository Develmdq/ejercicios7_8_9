import Contact from "./Contact";

const ListContact = ({ contacts, contactDelete, contactState }) => {
  return (
    <div>
      <div>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            contactDelete={contactDelete}
            contactState={contactState}
          />
        ))}
      </div>
    </div>
  );
};

export default ListContact;
