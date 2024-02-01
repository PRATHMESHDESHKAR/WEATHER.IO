import React from 'react'
import './Weatherapp.css'
import clear_icon from '../Assets/clear.png';
import search_icon from '../Assets/search.png';
import cloud_icon from '../Assets/cloudy.png';
import drizzle_icon from '../Assets/drizzle.png';
import humidity_icon from '../Assets/humidity.png';
import  rain_icon from '../Assets/rain.png';
import  snow_icon from '../Assets/snow.png';
import  wind_icon from '../Assets/wind.png';
import  thunder_icon from '../Assets/thunder.png';
import  mist_icon from '../Assets/mist.png';
import { useState } from 'react';


const Weatherapp = () => {
    const[cityinput,setcityinput] =useState('');
    const[weatherinfo,setweatherinfo] =useState({
      temperature : 10,
      location : 'Mumbai',
      icon : '',
      humidity : 64,
      wind : 18,
    });
    const [wicon,setWicon] =useState(cloud_icon);


    const getweather  = () =>  {
      
      if(!cityinput){
        alert("Please enter the city name")
        return
      }{

      const apikey ="8e6f5648415f98d6dcf6c5c84ae2f016"
      const url =`https://api.openweathermap.org/data/2.5/weather?q=${cityinput}&units=metric&appid=${apikey}`;
        
     fetch(url)
     .then((response) => response.json())
     .then((data) =>{
    
      if(data.weather[0].icon ==="01d" || data.weather.icon ==="01n")
            {
                setWicon(clear_icon);
            }
            else if 
            (data.weather[0].icon ==="02d" || data.weather[0].icon ==="02n")
            {
                setWicon(cloud_icon);
            }
            else if
            (data.weather[0].icon ==="03d" || data.weather[0].icon ==="03n")
            {
                setWicon(drizzle_icon);
            }
            else if
            (data.weather[0].icon ==="04d" || data.weather[0].icon ==="04n")
            {
                setWicon(drizzle_icon);
            }
            else if
            (data.weather[0].icon ==="09d" || data.weather[0].icon ==="09n")
            {
                setWicon(rain_icon);
            }
            else if
            (data.weather[0].icon ==="10d" || data.weather[0].icon ==="10n")
            {
                setWicon(rain_icon);
            }
            else if
            (data.weather[0].icon ==="11d" || data.weather[0].icon ==="11n")
            {
                setWicon(thunder_icon);
            }
            else if
            (data.weather[0].icon ==="13d" || data.weather[0].icon ==="13n")
            {
                setWicon(snow_icon);
            }
            else if
            (data.weather[0].icon ==="50d" || data.weather[0].icon ==="50n")
            {
                setWicon(mist_icon);
            }
            else
            {
                setWicon(clear_icon);
            }
      console.log(data);
     let MT =Math.round(data.main.temp);
     let FL =Math.round(data.main.feels_like);
     let WS = Math.round(data.wind.speed);

     const weather = {
     location: `${data.name}`,
     temperature: `${MT} `,
     feelslike : `${FL} `,
     humidity : `${data.main.humidity} `,
     wind : `${WS} `,
     condition :`${data.weather[0].description}`,
     icon : `${data.weather[0].icon}`,
 };
    
 setweatherinfo (weather);
})
.catch((error) => {
 console.error(error);
});
    }
}
    



  return(
    <div className='container'>
        <div className='top'>
      <input type='text' placeholder='Enter City..' className='cityinput'
      value={cityinput} onChange={(e) =>setcityinput(e.target.value)}
      />
       <div className='search-icon' onClick={getweather}>
                <img src ={search_icon} alt='' />
            </div>
            </div>
             <div className='weather-image'>
                <img src ={wicon}  alt='' />
            </div>
            
            {weatherinfo && (<div className='Weather-temp' >
                {weatherinfo.temperature} °C
            </div>
            )}
           {weatherinfo && ( <div className='Weather-location'>
           {weatherinfo.location}
                </div> )}

                <div className='Data-container'>
                <div className='element'>
                   <img src = {humidity_icon} className='icon' alt='' />
                   <div className='data'>
                   {weatherinfo && (<div className='Humidity-percent'>
                   {weatherinfo.humidity} %
                   </div>
                   )}
                    <div className='text'>humidity</div>
                    </div> 
                </div>
                <div className='element'>
                   <img src ={wind_icon} className='icon' alt='' />
                   <div className='data'>
                   {weatherinfo && (<div className='Wind-rate'>{weatherinfo.wind} Km/h</div>
                   )}
                    <div className='text'>Wind Speed</div>
                    </div> 
                    </div>
            
        </div>
    
    </div>
    
  );
      }
export default Weatherapp