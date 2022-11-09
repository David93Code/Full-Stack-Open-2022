import { useState } from "react";
import PersonForm from "./components/personform";
import Persons from "./components/persons";
import Filter from "./components/filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040 - 1234567", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");

  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  console.log(search);

  const addPerson = (event) => {
    event.preventDefault();

    if (
      persons.filter((e) => e.name.toLowerCase() === newName.toLowerCase())
        .length > 0
    ) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };

      setPersons(persons.concat(personObject));

      setNewName("");
      setNewNumber("");
    }
  };

  const handleNewName = (event) => {
    console.log(event.target.value);

    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    console.log(event.target.value);

    setNewNumber(event.target.value);
  };

  console.log(persons);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setSearch={setSearch} />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} search={search} />
    </div>
  );
};

export default App;
