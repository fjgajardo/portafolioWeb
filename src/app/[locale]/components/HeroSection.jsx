import React from 'react'
import { Link } from '../../../i18n/routing'
import { useTranslations } from 'next-intl'
import { motion } from "framer-motion"

const HeroSection = () => {
  const t = useTranslations('HeroSection');

  return (
    <div className='md:mt-32 md:mx-28 md:text-left text-center mt-24 mx-4'>        
        <h1 className='md:text-8xl  font-bold text-negro leading-tight  text-6xl'>
          {t('intro')}
        </h1>

        <h3 className='text-2xl text-morado-h my-10 dark:text-morado-l'>
          {t('bajada')}
        </h3>

        <div className='md:grid md:grid-cols-2'>
          <div>
            <p className='font-light text-negro'>
              {t('contenido1')}
              <br /> <br />
              {t('contenido2')}S
            </p>
          </div>


        </div>
        


        <motion.button whileHover={{scale:1.08}} whileTap={{scale: 0.9}} className=' bg-morado-h px-6 py-5 rounded-md text-xl text-blancoFijo font-semibold my-10'>
          <Link href='/sobreMi#Contacto'>
            {t('boton')}
          </Link>
        </motion.button>
          
          


    </div>
  )
}

export default HeroSection