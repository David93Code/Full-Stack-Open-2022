import nameService from '../services/names'
import Notification from './notification';

const PersonForm = (props) => {
  const addPerson = (event) => {
    event.preventDefault();
    if (props.newName.trim().length === 0 && props.newNumber.trim().length === 0) {
      alert('Enter a Name and a Number')
      return
    }
    if (props.newName.trim().length === 0 ) {
      alert('Enter a Name')
      return
    } else if (props.newNumber.trim().length === 0) {
      alert('Enter a number')
      return
    } 


    if (
      props.persons.filter(
        (person) => person.name.toLowerCase() === props.newName.toLowerCase().trim()
      ).length > 0 
    ) {
      // alert(`${props.newName} is already added to phonebook`);
     
      if ( window.confirm(`${props.newName.trim()} is already added to phonebook, replace the old umber with a new one?`)) {
        
        const foundPerson = props.persons.find(person => person.name.toLowerCase() === props.newName.toLowerCase().trim())
        const changedPerson= { ...foundPerson, number: props.newNumber }
        

        nameService.changeNumber(changedPerson).then( response => {
          props.setPersons(props.persons.map(person => person.id !== foundPerson.id ? person : response))
        
        }).then(() => {props.setNotificationMessage(`Changed ${props.newName}'s number`)
        setTimeout(() => {
          props.setNotificationMessage(null)
        }, 5000)})
        .catch(error => {
          props.setErrorMessage(
            `Information of '${foundPerson.name}' has already been removed from server`
          )
          setTimeout(() => {
            props.setErrorMessage(null)
          }, 5000)
          })
      } else {
        return
      }
     
    } else {
 
      const personObject = {
        name: props.newName.trim(),
        number: props.newNumber,
      };

      nameService.create(personObject).then(initialPersons => {
        props.setPersons(props.persons.concat(initialPersons))
      }).then(() => {props.setNotificationMessage(`Added ${props.newName}`)
      setTimeout(() => {
        props.setNotificationMessage(null)
      }, 5000)})
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
