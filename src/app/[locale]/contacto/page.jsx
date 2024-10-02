'use client'
import React from 'react'
import Lottie from 'lottie-react'
import animationData from '/src/app/[locale]/data/avionDePapel.json'
import {BsFillTelephoneFill, BsLinkedin, BsFillEnvelopeFill} from 'react-icons/bs'
import { IconContext } from "react-icons";

const page = () => {
  return (
    <div className='text-center md:mt-40 md:mx-60'>

        <Lottie className='h-52 z-0' animationData={animationData}/>

        
        <h1 className=' text-7xl font-bold text-negro leading-tight'>
            ¡Hablemos!
        </h1>
        <div className='mt-3 mx-24 justify-center gap-6 md:flex md:mx-0'>
          <div className='mx-3 my-2 md:my-0 inline-flex gap-3'> 
            <IconContext.Provider  value={{ color: '#7e55d9' }}>
              <BsFillTelephoneFill className='mt-1'/>
            </IconContext.Provider>
            <span className='font-semibold text-lg text-negro'>
               +569 7709 2131
            </span>
          </div>
          <div className='mx-3 my-2 md:my-0 inline-flex gap-3'> 
            <IconContext.Provider value={{ color: '#7e55d9' }}>
              <BsFillEnvelopeFill className='mt-1'/>
            </IconContext.Provider>
            <span className='font-semibold text-lg text-negro'>
               fjgajardo@uc.cl
            </span>
          </div>
          <div className='mx-3 my-2 md:my-0 inline-flex gap-3'> 
            <IconContext.Provider value={{ color: '#7e55d9' }}>
              <BsLinkedin className='mt-1'/>
            </IconContext.Provider>
            <span className='font-semibold text-lg text-negro'>
               <a href="https://www.linkedin.com/in/fernando-gajardo/">LinkedIn</a>
            </span>
          </div>            
        </div>
        

        {/* <button className='bg-morado-h px-5 py-4 rounded-md text-lg text-blanco font-semibold my-10'>
          <Link href='#'>
            ¡Hablemos!
          </Link>
        </button> */}
          
          


    </div>
  )
}

export default page