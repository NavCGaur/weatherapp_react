import React, {useContext, useReducer} from 'react';

import {WeatherReducer} from './Reducer';

    const WeatherAPPContext = React.createContext();


function WeatherAPPProvider  ({children}){

    const [state, dispatch] = useReducer(WeatherReducer, {
        city:{ "city": "Delhi", 
                "lat": "28.6100", 
                "lng": "77.2300", 
                "country": "India", 
                "iso2": "IN", 
                "admin_name": "Delhi", 
                "capital": "admin", 
                "population": "32226000", 
                "population_proper": "16753235"}
  , 
        current: '',
        daily: ''
    })

return(

    <>
        <WeatherAPPContext.Provider value={{state, dispatch}}>
        {children}
        </WeatherAPPContext.Provider>
    </>


)
}

export default WeatherAPPProvider;

export const UseWeatherAPPContext = ()=>{
    return useContext(WeatherAPPContext);
}