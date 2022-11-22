import { useEffect } from "react"
import axios from "axios";
import nameService from '../services/names'

const Buttons = (props) => {
  const deleteName = () => {
      if (window.confirm(`Delete ${props.name} ?`)){
        nameService.deleteName(props.id).then(()=> {
            props.setPersons((person) => person.filter(person => person.id != props.id ));
              })
      }
    
  }

    return (
        <button onClick={deleteName}>delete</button>
    )
}

export default Buttons;