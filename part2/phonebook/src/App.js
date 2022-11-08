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
      // this below is the function variant as the above comand (setPerson...)
      // setPersons((current) => [...current, personObject]);
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

  const filterNames = () => {
    let filter = document.getElementById("filterInput");
    let nameParagraph = document.getElementsByClassName("names");

    for (let i = 0; i < persons.name.length; i++) {
      if (persons.name[i].includes(filter.value.toLowerCase())) {
        nameParagraph.style.display = "block";
      } else {
        nameParagraph.style.display = "none";
      }
    }
  };

  console.log(persons);

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={filterNames} id={"filterInput"} />
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
        {persons.map((person) => (
          <p class={"names"} key={person.name}>
            {person.name} {person.number}
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;
