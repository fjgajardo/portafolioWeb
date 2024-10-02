import React from 'react'
import {FaDownload} from 'react-icons/fa'
import { IconContext } from "react-icons";
import Lottie from 'lottie-react'
import animationData from '/src/app/[locale]/data/avionDePapel.json'
import {BsFillTelephoneFill, BsLinkedin, BsFillEnvelopeFill} from 'react-icons/bs'
import { useTranslations } from 'next-intl';

const ContenidoSobreMi = () => {
  const t = useTranslations('ContenidoSobreMi');
  return (
    <div>
      <div className='md:flex md:flex-row text-center md:text-left md:mt-48 md:mb-56 md:mx-28 mt-16'>
        <div className='flex flex-wrap md:flex-nowrap items-center gap-8 basis-1/2'>
          <div>
            <h1 className='md:text-6xl text-3xl font-bold text-negro leading-tight'>
              {t('tituloSeccion')}
            </h1>
            <p className='font-light text-negro mt-5'>
              {t('bajada')}
              <br /><br />
              {t('bajada2')} 
            </p>
          </div>  
        </div>
        <div className='basis-1/2'>
          <img src="/profile.png" alt="" className='md:my-auto my-10 rounded-full border-verde border-4 w-1/2 md:w-1/3 mx-auto'/>
        </div> 
      </div>    

      <hr className='m-28 opacity-10' id="CV" />

      <div className='md:flex md:mx-40 gap-10 mb-20 '>
        <div className='text-center mb-24 md:mb-0'>
          <h1 className=' text-4xl font-bold text-negro leading-tight'>
            {t('portafolio')} 
          </h1>
          <img className='shadow-sm border-blanco border-2 rounded-sm mx-auto' src={t('imgPortafolio')}  alt=""  />
          <div className=''>
            <button className='flex mx-auto gap-2 p-4 my-4 bg-morado-h rounded-md items-center'>
              <a className='block text-blanco md:text-lg text-sm font-semibold mt-1 ' href={t('linkPortafolio')}>Ver archivo </a>
              <IconContext.Provider value={{ color: 'white' }}>
                <FaDownload/>
                </IconContext.Provider>
            </button> 
          </div>
        </div>

        <div className='text-center '>
          <h1 className=' text-4xl font-bold text-negro leading-tight'>
            {t('curriculum')} 
          </h1>
          <img className='shadow-sm border-blanco border-2 rounded-sm mx-auto' src={t('imgCV')}  alt="" />
          <div className=''>
            <button className='flex mx-auto gap-2 p-4 my-4 bg-morado-h rounded-md items-center'>
              <a className='block text-blanco md:text-lg text-sm font-semibold mt-1 ' href={t('linkCV')}>Ver archivo </a>
              <IconContext.Provider value={{ color: 'white' }}>
                <FaDownload/>
              </IconContext.Provider>
            </button> 
          </div>
        </div>
      </div>

      <hr className='m-28 opacity-10' id="Contacto" />

      <div className='text-center md:mt-40 md:mx-60 my-48 '>
        <Lottie className='h-52 z-0' animationData={animationData}/>
        <h1 className=' md:text-7xl text-5xl font-bold text-negro leading-tight'>
          {t('hablemos')}
        </h1>
        <div className='mt-3 mx-12 justify-center gap-6 md:flex md:mx-0'>
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
     </div>
     <hr className='m-28 opacity-5 hidden md:block'/>
    </div>

    
  )
}

export default ContenidoSobreMi
