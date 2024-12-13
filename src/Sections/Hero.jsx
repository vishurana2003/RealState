import React, { useEffect,useState } from 'react'
import { useDarkMode } from '../Components/DarkModeContext'
import heroimg from '../assets/images/hero1.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'



const Hero = () => {
  const [selectedOption, setSelectedOption] = useState('');

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
        <div className={`${darkmode ? 'dark bg-black' : 'light bg-white'}`}>
        <section id='hero' className='w-[95%] h-[600px] bg-cover bg-center m-auto rounded-xl flex justify-center flex-col items-start lg:px-28 px-7 gap-7 z-20
        ' style={{backgroundImage:`url(${heroimg})`}}>
          <h1 data-aos="zoom-in" className='text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]'>Find your next home in las vegas</h1>
          <p data-aos="zoom-in" className='text-white text-xl lg:pr-[500px] pr-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et eligendi error quos eveniet recusandae hic sit vero saepe quaerat possimus.</p>

        </section>
        </div>


        <div className={`${darkmode ? 'dark bg-black' : 'light bg-transparent'} z-10`}>
         <div data-aos='zoom-in'  className={`${darkmode ?'dark bg-gray-800': 'light: bg-white'} lg:w-[70%] w-full m-auto grid lg:grid-cols-4  grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-8` }>
          <div className='w-full'>
            <h1 className=' text-black font-semibold dark:text-white'>
              Location
            </h1>
          <input type='text' placeholder='Enter an address state or pincode' className='bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]'/>
          </div>
          <div className='w-full'>
          <h1 className='text-black font-semibold dark:text-white'>
              TYPE
            </h1>
            <select
        name="selectOption"
        id="selectOption"
        className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md"
        value={selectedOption} // Bind this to the state
        onChange={(e) => setSelectedOption(e.target.value)} // Handle change
      >
        <option value="" disabled>Select Property</option>
        <option value="option1">Rentals</option>
        <option value="option2">Sales</option>
        <option value="option3">Commercial</option>
      </select>
          </div>
          <div className='w-full'>
          <h1 className='text-black font-semibold dark:text-white'>
             CATEGORY
            </h1>
            <select
        name="selectOption"
        id="selectOption"
        className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md"
        value={selectedOption} // Bind this to the state
        onChange={(e) => setSelectedOption(e.target.value)} // Handle change
      >
        <option value="" disabled>Appartments</option>
        <option value="option1">Villa</option>
        <option value="option2">Condos</option>
        
      </select>
          </div>
          <div className='w-full'>
             <button className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300'>SUBMIT</button>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Hero