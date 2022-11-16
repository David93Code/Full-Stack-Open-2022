
import { useState, useEffect } from "react";
import SearchBar from './components/searchbar';

const App = () => {

  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  const hook = () => {
  fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    setCountries(data);
  });
  }
  useEffect(hook, [])

  const filter = ()=> {
    const countrySearch = countries.filter((country) => {
      return country.name.common.toLowerCase().includes(search.toLowerCase())}).length;

      const country = countries.filter((country) => {
        return country.name.common.toLowerCase().includes(search.toLowerCase())}).map((country) => {
          return (
          <div key={country.name.common}>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <h3>languages:</h3>
            <ul>
            {country.languages? Object.values(country.languages).map((language) => <li>{language}</li>): null}
            </ul>
            <img src={country.flags.png}/>
          </div>
          )
        })
        console.log(countrySearch)
        console.log(country)

     
    if (search.toLowerCase() === "") {
      return <p>make a search</p>
   } else if(countrySearch > 10){
        return <p>Too many matches, specify another filter</p>
   
      } else if (countrySearch === 1) {
        return (
          country 
        )
        
    } else {
        return countries.filter((country) => {
          return country.name.common.toLowerCase().includes(search.toLowerCase())}).map((country) => (
            <p key={country.name.common}>
              {country.name.common} <button onClick={() => setSearch(country.name.common)}>show</button>
            </p>
          ))
      }


  }
  

   return (
     <div>
       <SearchBar search={search} setSearch={setSearch}/>
       <div>
       {filter()} 
  
       </div>
     </div>
   )
}

export default App;
