import React from 'react'
import  { useEffect } from 'react'
import aboutimg from '../assets/images/about.jpg'
import { useDarkMode } from '../Components/DarkModeContext'
import AOS from 'aos'
import 'aos/dist/aos.css'


const About = () => {
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
      <section id='about' className={`${darkmode?'dark bg-black':'light bg-transparent'} w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}>
        <div>
          <img data-aos='zoom-in'src={aboutimg} alt='aboutimg' className='rounded-2xl lg:w-[500px] lg:h-[600px]'/>
        </div>
        <div className='flex flex-col gap-8 justify-center items-center'>
         <h1 data-aos="zoom-in" className='text-red-500 dark:text-white'>Who We Are</h1>
         <h1 data-aos="zoom-in" data-aos-delay="200" className='text-black text-[40px] font-semibold leading-10 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
         <p data-aos="zoom-in" data-aos-delay="400" className='text-xl text-gray-600 dark:text-white text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptas tempora ad non nesciunt veniam alias delectus neque nobis enim tenetur laudantium, minus earum aspernatur!</p>
         <button className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4  text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300'>Read More</button>
        </div>

      </section>
    </div>
  )
}

export default About