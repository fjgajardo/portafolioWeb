import React, { useState } from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from '../../../i18n/routing';
import {useTranslations} from 'next-intl';
import LocalSwitcher from './local-switcher';

const NavBar = () => {
    const [nav, setNav] = useState (false)
    const t = useTranslations('NavBar');    
    const links = ['ultimosProyectos', 'sobreMi', 'cv', 'contacto'];

    return (
        <nav className='py-8 flex justify-between px-6 md:px-28 z-10 bg-blancoBlanco sticky top-0 border-b-2 border-blanco'>
          <Link href='/' className='text-2xl md:text-3xl font-bold text-negro border-b-2 border-verde'>
            Fernando Gajardo
          </Link>  
    
          <div className='md:hidden'>
            <button onClick={() => setNav(!nav)} className='cursor-pointer z-10 text-negro mb-5 mt-2 duration-200 bg-blancoBlanco'>
              {nav ? <FaTimes size={20} className='block' /> : <FaBars size={20} className='block'  
     />}
            </button>
          </div>
          <ul className={`${nav ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center absolute md:static top-20 md:top-0 right-0 w-full md:w-auto shadow-md md:shadow-none z-20 my-4 pb-3 md:pb-0 rounded-md md:rounded-none bg-blancoBlanco`}>
            {links.map((link) => (
              <li key={link.toString()} className='mx-4 md:mx-4 hover:border-b-2 border-verde ease-linear block md:inline-block my-2 md:my-0 text-gris font-semibold text-lg md:text-base'>
                <Link href={t(`${link}.link`)}>{t(`${link}.texto`)}</Link>
              </li>
            ))}
            <LocalSwitcher />
          </ul>
        </nav>
      );
}
export default NavBar