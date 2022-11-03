import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  // console.log(JSON.stringify(person1) === JSON.stringify(person2));

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
      };

      setPersons(persons.concat(personObject));
      // this below is the function variant as the above comand (setPerson...)
      // setPersons((current) => [...current, personObject]);
      setNewName("");
    }
  };

  const handleNewName = (event) => {
    console.log(event.target.value);

    setNewName(event.target.value);
  };

  console.log(persons);

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* <div>debug: {newName}</div> */}
      <div>
        {persons.map((person) => (
          <p key={person.name}>{person.name}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
