import React from 'react'
import HomeCarousel from '../../Components/HomeCarousel/HomeCarousel'
import HomeSectionCardCarousel from '../../Components/HomeSectionCardCarousel/HomeSectionCardCarousel'

const HomePage = () => {
  return (
    <div>
        <HomeCarousel/>

        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCardCarousel/>
            <HomeSectionCardCarousel/>
            <HomeSectionCardCarousel/>
            <HomeSectionCardCarousel/>
            <HomeSectionCardCarousel/>
        </div>
    </div>
  )
}

export default HomePage