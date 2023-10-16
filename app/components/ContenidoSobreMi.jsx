import React from 'react'
import {FaDownload} from 'react-icons/fa'
import { IconContext } from "react-icons";
import Lottie from 'lottie-react'
import animationData from 'app/data/avionDePapel.json'
import {BsFillTelephoneFill, BsLinkedin, BsFillEnvelopeFill} from 'react-icons/bs'


const ContenidoSobreMi = () => {
  return (
    <div>
        <div className='mt-40'>
            <img src="/profile.png" alt="" className='my-10 md:mb-20 rounded-full border-verde border-4 w-1/2 md:w-1/5 mx-auto'/>
        </div>
        <div className='md:mx-40 text-center flex flex-wrap md:flex-nowrap items-center gap-8'>
            <div>
                <h1 className=' text-3xl font-bold text-negro leading-tight'>
                    ¿Quién soy? Algunas personas me dicen Gabu.
                </h1>
                <p className='font-light text-negro mt-5'>
                Como diseñador integral con experiencia académica en diseño UX/UI, branding y desarrollo de productos digitales, estoy en busca de un puesto que me permita seguir aprendiendo y creciendo en mi carrera. Mi pasión por el diseño se entrelaza con mi amor por los juegos, lo que me inspira a crear experiencias de usuario excepcionales y envolventes. <br /> <br />
                Busco un entorno de trabajo que valore la innovación y la diversión en el diseño. Estoy emocionado de unirme a un equipo que comparta mi entusiasmo y crear experiencias digitales memorables y envolventes juntos.
                </p>
            </div>
            
            
        </div>

        
        
        <hr className='m-28 opacity-10' id="CV" />
        <div className='flex md:mx-40 gap-10 mb-20 '>
            <div className='text-center '>
                <h1 className=' text-4xl font-bold text-negro leading-tight'>
                    Portafolio
                </h1>
                <img className='shadow-sm border-blanco border-2 rounded-sm mx-auto' src='/sobreMi/portafolio.png' alt=""  />
                <div className=''>
                    <button className='flex mx-auto gap-2 p-4 my-4 bg-morado-h rounded-md items-center'>
                            <a className='block text-blanco md:text-lg text-sm font-semibold mt-1 ' href="/Portafolio.pdf">Ver archivo </a>
                            <IconContext.Provider value={{ color: 'white' }}>
                                <FaDownload/>
                            </IconContext.Provider>
                    </button> 
                </div>
            </div>

            <div className='text-center '>
            <h1 className=' text-4xl font-bold text-negro leading-tight'>
                CV
            </h1>
            <img className='shadow-sm border-blanco border-2 rounded-sm mx-auto' src='/sobreMi/cv.png' alt="" />
            <div className=''>
                <button className='flex mx-auto gap-2 p-4 my-4 bg-morado-h rounded-md items-center'>
                        <a className='block text-blanco md:text-lg text-sm font-semibold mt-1 ' href="CV.pdf">Ver archivo </a>
                        <IconContext.Provider value={{ color: 'white' }}>
                            <FaDownload/>
                        </IconContext.Provider>
                </button> 
            </div>
        </div>




        </div>
        <hr className='m-28 opacity-10' id="Contacto" />
        <div className='text-center md:mt-40 md:mx-60 my-48'>

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
     </div>
    </div>

    
  )
}

export default ContenidoSobreMi
