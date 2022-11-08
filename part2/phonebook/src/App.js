import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040 - 1234567" },
  ]);
  const [newName, setNewName] = useState("");

  const [newNumber, setNewNumber] = useState("");

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
        number: newNumber,
      };

      setPersons(persons.concat(personObject));
      // this below is the function variant as the above comand (setPerson...)
      // setPersons((current) => [...current, personObject]);
      setNewName("");

      // setNumber(number.concat(newNumber));
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
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        ))}

        {/* {number.map((num) => (
          <p>{num}</p>
        ))} */}
      </div>
      {/* <div>
        {number.map((num) => (
          <p key={number}>{num}</p>
        ))}
      </div> */}
    </div>
  );
};

export default App;
