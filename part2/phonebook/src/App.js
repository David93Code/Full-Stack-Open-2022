import { useState } from "react";

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

      <div>
        filter shown with{" "}
        <input onChange={(event) => setSearch(event.target.value)} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons
          .filter((person) => {
            return search.toLowerCase() === ""
              ? person
              : person.name.toLowerCase().includes(search);
          })
          .map((person) => (
            <p key={person.name}>
              {person.name} {person.number}
            </p>
          ))}
      </div>
    </div>
  );
};

export default App;
