import React, { useEffect, useState } from 'react';

import { UseWeatherAPPContext } from '../Context/Context';

import SingleCardComponents from '../SingleCard/Index';

function WeekInfoCardComponent(){

    const {state:{daily}, dispatch} = UseWeatherAPPContext();

    const [selectedCard, setSelectedCard] = useState(0);

    const updateCurrent = () =>{
        return(
            dispatch({
                type:'SET_CURRENT',
                payload: daily[selectedCard]
            })
        )
    } 

    useEffect(()=>{
        updateCurrent()},[daily,selectedCard])

    console.log('daily', daily);

    return(   

    <div className='cardwrap'>
         <ul className='cardList'>
            {
                daily && daily.length>0 ?daily.map((item,index)=>{
                    if(index<7){
                    return <SingleCardComponents key={index} item={item} className={index===selectedCard ? 'active':''} onClick={()=> {       
                            setSelectedCard(index);
                            updateCurrent();
                        }  } />        
                        }   
                }):''
                
                
            }
         </ul>

    </div>


)}


export default WeekInfoCardComponent;