import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import listaProyectos from 'app/data/proyectos.json'




const TarjetasPortafolio = () => {


  return (
    <div className=' my-32 md:mx-28'>
      <div>
        <h1 className='font-bold text-4xl text-negro'>
          Últimos proyectos
        </h1>
        <p className='text-morado-h font-light mb-10 mt-4'>En la sección CV puedes encontrar otros proyectos</p>
      </div>
      
      <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-20 gap-y-10 '>
      {
        listaProyectos.map (({id, imagenPrincipal, titulo, fecha, descripcion}) => (
          
            <div className='border-blanco border-2 rounded-md shadow-sm hover:scale-[1.01] duration-100 ease-linear' key={id}>
              <Link href={`/proyectos/${id}`}>
                <img className='rounded-md cursor-pointer' src={imagenPrincipal} alt="" />
              </Link>
              
              <div className='m-5 '>
              <div className='justify-between flex mt-4'>
                  {/* <button className='border-2 border-morado-h p-3 pt-4 rounded-md w-1/3 m-1 text-morado-h font-semibold'>
                    <a href={destino}>Detalles</a>
                  </button>

                  <button className='bg-morado-h p-3 pt-4 rounded-md w-2/3 text-blanco m-1 font-semibold '>
                    <Link href={destinoProto} >Prototipo</Link>
                  </button> */}
                  
                  
                </div>
                <p className='font-light text-morado-h text-sm'>
                  {fecha}
                </p>
                <Link href={`/proyectos/${id}`}>
                  <h3 className='text-xl my-1 font-bold text-negro'>
                    {titulo}
                  </h3>
                </Link>
                <p className='font-light text-gris'>
                  {descripcion}
                </p>
                
                
                
              </div>
            </div>
          

      ))
      }
      </div>

      
    </div>
    
  )
}

export default TarjetasPortafolio