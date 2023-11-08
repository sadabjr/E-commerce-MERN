import React from 'react'
import HomeCarousel from '../../Components/HomeCarousel/HomeCarousel'
import HomeSectionCardCarousel from '../../Components/HomeSectionCardCarousel/HomeSectionCardCarousel'
import {mens_kurta} from '../../../Data/mens_kurta';

const HomePage = () => {
  return (
    <div>
        <HomeCarousel/>

        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10 '>
            <HomeSectionCardCarousel data={mens_kurta}/>
            <HomeSectionCardCarousel/>
            <HomeSectionCardCarousel/>
        </div>
    </div>
  )
}

export default HomePage