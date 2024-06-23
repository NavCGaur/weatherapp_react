import React from 'react';
import dayjs from 'dayjs';
import { UseWeatherAPPContext } from '../Context/Context';


function LeftComponents() {

    const{state:{city,current}}=UseWeatherAPPContext();

    const WEEKDAYS = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        ]

    if(!current) return <div>...Loading</div>  ;
    const weekdayIndex =dayjs.unix(current.dt).day();
    
  return (
    <>
        <div className='leftWrap'>
            <div className='dateWrap'>
                <h2>{WEEKDAYS[weekdayIndex]}</h2>
                <span className='dateDay'> 
                    {dayjs.unix(current.dt).format("DD MMM YYYY")}
                </span>
                <span>{city.city}-{city.admin_name}-{city.country}</span>

                <div className='weatherContainer'>
                <img alt= "rohit" className='weatherIcon' src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} />
                <h1 className='weatherTemp'>{Math.round(current.temp.max)}<sup>o</sup>C</h1>
                    <h3 className='weatherDesc'>{current.weather[0].main}</h3>
                </div>
            </div>

        </div>
    
    
    
    </>
  )
}

export default LeftComponents