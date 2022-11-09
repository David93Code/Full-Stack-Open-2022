const PersonForm = (props) => {
  const addPerson = (event) => {
    event.preventDefault();

    if (
      props.persons.filter(
        (e) => e.name.toLowerCase() === props.newName.toLowerCase()
      ).length > 0
    ) {
      alert(`${props.newName} is already added to phonebook`);
    } else {
      const personObject = {
        name: props.newName,
        number: props.newNumber,
      };

      props.setPersons(props.persons.concat(personObject));

      props.setNewName("");
      props.setNewNumber("");
    }
  };

  const handleNewName = (event) => {
    console.log(event.target.value);

    props.setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    console.log(event.target.value);

    props.setNewNumber(event.target.value);
  };
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={props.newName} onChange={handleNewName} />
      </div>
      <div>
        number <input value={props.newNumber} onChange={handleNewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
