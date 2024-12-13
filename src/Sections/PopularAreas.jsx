import React from 'react'
import { useDarkMode } from '../Components/DarkModeContext'
import AOS from 'aos'
import 'aos/dist/aos.css'
import  { useEffect } from 'react'
import area1 from '../assets/images/area1.jpg'
import area2 from '../assets/images/area2.jpg'
import area3 from '../assets/images/area3.jpg'

const PopularAreas = () => {
  useEffect(()=>{
    AOS.init({
        offset:200,
        duration:800,
        easing:'ease-in-out',
        delay:100
    })
},[])
const {darkmode,toogleDarkMode}=useDarkMode();

  return (
    <div>
      <div className={`${darkmode ? 'dark: bg-black' : 'light bg-white'}`}>
        <section className={`${darkmode ? 'dark bg-gray-800' : 'light bg-red-100 lg:w-[90%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-center lg:px-20 px-6 py-20 gap-20'}`}>
        <div id='top' className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8'>
          <div>
            <h1 data-aos="zoom-in" className='text-red-500 dark:text-white'>
              Popular Areas
            </h1>
            <h1 data-aos="zoom-in" className='text-black text-[40px] font-semibold leading-10 mt-4 dark:text-white'>Explore more<br></br>popular areas</h1>
          </div>
          <div className='grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center gap-6'>
              <div data-aos="zoom-in" data-aos-delay="300"className="h-[400px] bg-cover bg-center rounde-xl" style={{backgroundImage:`url(${area1})`}}>

              </div>
              <div data-aos="zoom-in" data-aos-delay="300"className="h-[400px] bg-cover bg-center rounde-xl" style={{backgroundImage:`url(${area2})`}}>

</div>
<div data-aos="zoom-in" data-aos-delay="300"className="h-[400px] bg-cover bg-center rounde-xl" style={{backgroundImage:`url(${area3})`}}>

</div>
          </div>
        </div>
        <div id='bottom' className='w-full lg:grid-cols-3 flex lg:justify-center justify-start items-start gap-6'  >
          <div data-aos="slide-up" data-aos-delay="200" className='flex justify-center lg:items-center gap-8 w-full' >
            <h1 className='text-black text-7xl font-semibold dark:text-white'>5K</h1>
            <h1>ACTIVE <br></br>LISTING</h1>
          </div>
          <div data-aos="slide-up" data-aos-delay="200" className='flex justify-center lg:items-center gap-8 w-full' >
            <h1 className='text-black text-7xl font-semibold dark:text-white'>5K</h1>
            <h1>ACTIVE <br></br>LISTING</h1>
          </div>
          <div data-aos="slide-up" data-aos-delay="200" className='flex justify-center lg:items-center gap-8 w-full' >
            <h1 className='text-black text-7xl font-semibold dark:text-white'>5K</h1>
            <h1>ACTIVE <br></br>LISTING</h1>
          </div>
          
          

        </div>
        </section>

      </div>
      

    </div>
   
  )
}

export default PopularAreas