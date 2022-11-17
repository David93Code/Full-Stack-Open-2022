import { useEffect } from "react";

const Weather = (props) => {
    const fetchWeather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.city},${props.countryCode}&appid=${props.API}`)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              props.setWeather(data)
            });
            }
            console.log(props.countryCode);
            useEffect(fetchWeather, [props.city])
            console.log(props.weather.main?.temp)
            console.log(props.city)
           return ( 
     
             
                <div>
                   <p>temperature  {Math.floor(props.weather.main?.temp - 273.15)} Celcius</p> 
            <img src={`http://openweathermap.org/img/wn/${props.weather.weather ? props.weather.weather[0].icon: null}@2x.png`} />
             <p>wind {props.weather.wind?.speed} m/s</p>
             </div>
            )
}

export default Weather;