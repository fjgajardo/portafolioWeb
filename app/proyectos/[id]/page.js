import React from 'react'
import listaProyectos from 'app/data/proyectos.json'
import { notFound } from "next/navigation"
import {IoArrowBack} from 'react-icons/io5'
import Link from 'next/link'


const getData = (id) => {
    const data = listaProyectos[id]

    if(data) {
        return data

    }
    return notFound()
}



const page = ({ params }) => {
    const proyecto = getData(params.id)

  return (
    <div className='md:pr-10 px-3 md:flex md:gap-10'>
        {/* Imagenes */}
        <div className='snap-x snap-mandatory flex overflow-x-scroll md:basis-3/4 md:inline md:snap-none md:overscroll-x-none'>
         {
            proyecto.imagenGaleria.map (({imagen}) => (
          
                <img className='rounded-lg snap-start md:mb-10 shrink-0' src={imagen} alt="" />

      ))
      } 
        </div>   

        {/*Información */}

        <div className='mt-5 mx-1 md:basis-1/4 md:sticky md:h-screen md:top-24 md:mt-0'>          
            
            <p className='text-morado-h font-light md:mt-10 md:mb-3 snap-start'>
                {proyecto.fecha}
            </p>
            <h1 className='text-3xl font-bold text-negro leading-tight'>
                {proyecto.titulo}
            </h1>
            <p className='text-gris font-light my-1'>
                Participantes: Fernando Gajardo
            </p>
            <p>
                {proyecto.descripcionLarga}
            </p>  
            {/* boton */}
            <div className='text-right my-4'>
                <button className='p-3 pt-4 rounded-md w-full  text-blanco bg-morado-h font-semibold'>
                    <a href={proyecto.destinoProto} target="_blank">{proyecto.leyendaBoton}</a>
                </button>
            </div>  
            <div className='md:mt-5'>
                <Link href="/" className='flex my-10' >
                    <IoArrowBack className='mr-3 mt-1.5'/>
                    <h1 className='align-middle font-semibold text-lg'> Volver</h1>
                </Link>
                
            </div>        
        </div>

        

    </div> 
  )
}
// 
export default page