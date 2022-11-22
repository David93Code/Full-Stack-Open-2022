import Buttons from "./buttons";

const Persons = (props) => {
  return (
    <div>
      {props.persons
        .filter((person) => {
          return props.search.toLowerCase() === ""
            ? person
            : person.name.toLowerCase().includes(props.search);
        })
        .map((person) => (
          <p key={person.name}>
            {person.name} {person.number} <Buttons id={person.id} persons={props.persons}
            setPersons={props.setPersons} name={person.name}/>
          </p>
        ))}
    </div>
  );
};

export default Persons;
