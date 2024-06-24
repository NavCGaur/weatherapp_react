import React from 'react'
import ChooseState from '../ChooseState'
import WeekInfoCardComponent from '../WeekInfo/index'
import HumidityComponents from '../Humidity'
import LeftComponents from '../Left'
import Earth from '../../assets/earth.mp4'

function Home() {
  return (
    <div className='homeWrap'>
         <div className='video'>
              <video autoPlay loop muted height="600px" width="400px">
                <source src={Earth} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
          </div>


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