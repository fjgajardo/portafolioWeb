import React from 'react'
import { notFound } from "next/navigation"
import {IoArrowBack} from 'react-icons/io5'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import TarjetasPortafolio from '../../components/TarjetasPortafolio'
import { useMessages } from 'next-intl'


const getData = (id) => {
    const proyectos = ['proyecto1', 'proyecto2', 'proyecto3', 'proyecto4', 'proyecto5', 'proyecto6']; 
    const data = proyectos[id]

    if(data) {
        return data

    }
    return notFound()
}



const page = ({ params }) => {
    const proyecto = getData(params.id); 
    const proyectoID = 'TarjetasPortafolio.' + proyecto;
    const proyectoGaleria = proyectoID + '.imagenGaleria';
    const t = useTranslations(proyectoID);
    const galeria = useTranslations(proyectoGaleria);

    const messages = useMessages();

    // Dynamically access the project's imagenGaleria
    const keys = Object.keys(messages.TarjetasPortafolio[proyecto].imagenGaleria);


    
      
  return (
    <div className='md:pr-10 px-3 md:flex md:gap-10'>
        {/* Imagenes */}
        <div className='snap-x snap-mandatory flex overflow-x-scroll md:basis-3/4 md:inline md:snap-none md:overscroll-x-none'>
         {
            keys.map ((key) => (
          
                <img className='rounded-lg snap-start md:mb-10 shrink-0' src={galeria(`${key}`)} alt="" />

      ))
      } 
        </div> 

        {/*Información */}

        <div className='mt-5 mx-1 md:basis-1/4 md:sticky md:h-screen md:top-24 md:mt-0'>          
            
            <p className='text-morado-h font-light md:mt-10 md:mb-3 snap-start'>
            </p>
            <h1 className='text-3xl font-bold text-negro leading-tight'>
                {t('titulo')}
            </h1>
            <p className='text-gris font-light my-1'>
                {t('participantes')}
            </p>
            <p className='text-negro mt-4'>
                {t('descripcionLarga')}
            </p>  
            {/* boton */}
            <div className='text-right my-4'>
                <button className='p-3 pt-4 rounded-md w-full text-blancoFijo bg-morado-h font-semibold'>
                    <a href={t('destinoProto')} target="_blank">{t('leyendaBoton')}</a>
                </button>
            </div>  
            <div className='md:mt-5'>
                <Link href="/" className='flex my-10' >
                    <IoArrowBack className='mr-3 mt-1.5 dark:text-negro'/>
                    <h1 className='align-middle font-semibold text-lg dark:text-negro'>{t('volver')}</h1>
                </Link>
                
            </div>        
        </div>

        

    </div> 
  )
}
// 
export default page