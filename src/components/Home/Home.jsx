import React from 'react'
import ChooseState from '../ChooseState'
import WeekInfoCardComponent from '../WeekInfo/index'
import HumidityComponents from '../Humidity'
import LeftComponents from '../Left'

function Home() {
  return (
    <div className='homeWrap'>

        <div className='weatherSection'>
            <LeftComponents />
            <div className='rightSide'>
                <ChooseState />
                <WeekInfoCardComponent />
                <HumidityComponents />

            </div>
         
        </div>
        
    </div>
  )
}

export default Home