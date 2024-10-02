import React from 'react'
import Image from 'next/image'
import { Link } from '../../../i18n/routing'
import { useTranslations } from 'next-intl'




const TarjetasPortafolio = () => {
  const t = useTranslations('TarjetasPortafolio');
  const proyectos = ['proyecto1', 'proyecto2', 'proyecto3', 'proyecto4', 'proyecto5', 'proyecto6']; 


  return (
    <div className=' my-32 md:mx-28'>
      <div>
        <h1 className='font-bold text-4xl text-negro'>
          {t('tituloSeccion')}
        </h1>
        <p className='text-morado-h font-light mb-10 mt-4'>{t('bajadaTitulo')}</p>
      </div>
      
      <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-20 gap-y-10 '>
      {
        proyectos.map ((proyecto) => (
    
            <div className='border-blanco border-2 rounded-md shadow-sm hover:scale-[1.01] duration-100 ease-linear' key={proyecto}>
              <Link href={t(`${proyecto}.link`)}>
                <img className='rounded-md cursor-pointer' src={t(`${proyecto}.imagenPrincipal`)}  alt="" />
              </Link>
              
              <div className='m-5 '>
              <div className='justify-between flex mt-4'>               
                </div>
                <p className='font-light text-morado-h text-sm'>
                  {t(`${proyecto}.fecha`)}
                </p>
                <Link href={t(`${proyecto}.link`)}>
                  <h3 className='text-xl my-1 font-bold text-negro'>
                    {t(`${proyecto}.titulo`)}
                  </h3>
                </Link>
                <p className='font-light text-gris'>
                  {t(`${proyecto}.descripcion`)}
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