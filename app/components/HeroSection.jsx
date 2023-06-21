import React from 'react'
import Link from 'next/link'
import Lottie from 'lottie-react'
import animationData from 'app/data/avionInicio.json'

const HeroSection = () => {
  return (
    <div className='text-center md:mt-40 md:mx-60'>

        <Lottie className='h-52' animationData={animationData}/>

        
        <h1 className=' text-7xl font-bold text-negro leading-tight'>
            Hola. Soy Fernando Gajardo
        </h1>
        <h3 className='text-2xl text-morado-h my-10'>
            Diseñador integral con enfoque de UX/UI y entretención
        </h3>
        <p className='font-light text-negro'>
        Soy diseñador integral con una gran pasión por la experiencia de usuario y el diseño de interfaces. Recientemente me he sumergido en el emocionante mundo del desarrollo de productos digitales. En este momento, estoy en la búsqueda de un puesto como diseñador UX/UI, donde pueda seguir aprendiendo y creciendo. <br /> <br />
       
       Cuento con dominio práctico de herramientas creativas como la suite de Adobe o Figma. Además, estoy familiarizado con diferentes metodologías de diseño y desarrollo. <br /> <br />

        Estoy aquí para traer un toque de diversión y pasión a tu proyecto. ¡Vamos a crear algo increíble juntos!
        </p>

        {/* <button className='bg-morado-h px-5 py-4 rounded-md text-lg text-blanco font-semibold my-10'>
          <Link href='#'>
            ¡Hablemos!
          </Link>
        </button> */}
          
          


    </div>
  )
}

export default HeroSection