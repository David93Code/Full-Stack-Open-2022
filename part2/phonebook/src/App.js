import { useState, useEffect } from "react";
import PersonForm from "./components/personform";
import Persons from "./components/persons";
import Filter from "./components/filter";
import axios from "axios";
import nameService from "./services/names";
import Buttons from "./components/buttons";
import Notification from "./components/notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");

  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const [notificationMessage, setNotificationMessage] = useState("");
  console.log(search);

  console.log(persons);

  useEffect(() => {
    nameService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} />
      <Filter setSearch={setSearch} />
      <h2>add a new</h2>
      <PersonForm
        persons={persons}
        newName={newName}
        newNumber={newNumber}
        setPersons={setPersons}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />

      <h2>Numbers</h2>
      <Persons persons={persons} search={search} setPersons={setPersons} />
    </div>
  );
};

export default App;
