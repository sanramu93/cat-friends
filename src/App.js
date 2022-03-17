import { useState } from "react";
import data from "./data/data";
import SearchBar from "./components/SearchBar";
import AddContact from "./components/AddContact";
import Card from "./components/Card";

export default function App() {
  const [contacts, setContacts] = useState(data);
  const [newContact, setNewContact] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const onTermSubmit = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const onNameChange = (e) => {
    setNewContact((prevState) => {
      return { ...prevState, id: contacts.length + 1, name: e.target.value };
    });
  };

  const onEmailChange = (e) => {
    setNewContact((prevState) => {
      return { ...prevState, id: contacts.length + 1, email: e.target.value };
    });
  };

  const addContact = (e) => {
    e.preventDefault();
    setContacts((prevState) => {
      return [newContact, ...prevState];
    });
  };

  const renderContacts = () => {
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm)
    );
    return filteredContacts.map((contact) => (
      <Card key={contact.id} contact={contact} />
    ));
  };

  return (
    <div className="container">
      <main className="main">
        <header className="header">
          <h1 className="header__title">CAT FRIENDS</h1>
          <SearchBar onTermSubmit={onTermSubmit} />
          <AddContact
            addContact={addContact}
            onNameChange={onNameChange}
            onEmailChange={onEmailChange}
          />
        </header>
        <section className="contacts">{renderContacts()}</section>
      </main>
    </div>
  );
}
