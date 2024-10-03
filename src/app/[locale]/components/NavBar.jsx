import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from '../../../i18n/routing';
import {useTranslations} from 'next-intl';
import LocalSwitcher from './local-switcher';
import DarkModeToggle from './DarkmodeToggle';

const NavBar = () => {
    

    const [nav, setNav] = useState (false)
    const t = useTranslations('NavBar');    
    const links = ['ultimosProyectos', 'sobreMi', 'cv', 'contacto'];

    return (
        <nav className='py-8 flex justify-between px-6 md:px-36 z-10 bg-blancoBlanco sticky top-0 border-b-2 border-blanco'>
          <div className='mt-2'>
            <Link href='/' className='text-2xl md:text-3xl font-bold text-negro border-b-2 border-verde '>
              Fernando Gajardo
            </Link>  
          </div>
          
          <div className='md:hidden '>
            <button onClick={() => setNav(!nav)} className='cursor-pointer z-10 text-negro mb-5 mt-2 duration-200 bg-blancoBlanco items'>
              {nav ? <FaTimes size={20} className='block' /> : <FaBars size={20} className='block'  
           />}
            </button>
          </div>
          <ul className={`${nav ? 'flex' : 'hidden'}  md:flex md:flex-row md:static md:rounded-none md:h-auto md:shadow-none md:w-auto md:px-0 md:py-0 
          bg-blancoBlanco  flex-col align-right mr-3 items-right text-right absolute  top-20  right-0 w-64 shadow-md z-20 mt-4 md:pb-0 rounded-md top-0 h-screen`}>
            {links.map((link) => (
              <li key={link.toString()} className='mx-4 md:mx-4 hover:border-b-2 border-verde ease-linear block md:inline-block my-3 md:my-0 text-gris font-semibold text-lg md:text-base'>
                <Link href={t(`${link}.link`)}>{t(`${link}.texto`)}</Link>
              </li>
            ))}
            <div className='mx-4 md:mx-4 block md:inline-block my-3 md:my-0 text-gris font-semibold text-lg md:text-base'>
              <LocalSwitcher />
            </div>
            
            <div className='md:bottom-0 md:right-0 fixed bottom-10 right-4'>
              <DarkModeToggle />
            </div>
            
          </ul>
        </nav>
      );
}
export default NavBar