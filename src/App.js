import { useState } from "react";
import data from "./data/data";
import SearchBar from "./components/SearchBar";
import AddContact from "./components/AddContact";
import Card from "./components/Card";

export default function App() {
  const [contacts, setContacts] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  const onTermSubmit = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const addContact = (e) => {
    setContacts((prevState) => {
      return [
        { id: prevState.length + 1, name: "Sofi", email: "sofi@fake.com" },
        ...prevState,
      ];
    });
    console.log("Click!");
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
          <AddContact addContact={addContact} />
        </header>
        <section className="contacts">{renderContacts()}</section>
      </main>
    </div>
  );
}
