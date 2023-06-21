import React, { useState } from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'

const NavBar = () => {
    const [nav, setNav] = useState (false)

    const links = [
        {
            id: 1, 
            texto: 'Últimos proyectos',
            link: '/#TarjetasPortafolio',
        },
        {
            id: 2, 
            texto: 'Sobre mi',
            link: '/sobreMi',
        },
        {
            id: 3, 
            texto: 'CV',
            link: '/sobreMi#CV',
        },
        {
            id: 4, 
            texto: 'Contacto',
            link: '/sobreMi#Contacto',
        },

    ]
    

  return (
    <nav className='py-8 flex justify-between px-14 md:mx-0 z-10 bg-blancoBlanco sticky top-0 border-b-2 border-blanco'>
        <Link href='/' className='text-2xl md:text-3xl font-bold text-negro mr-12 border-b-2 border-verde'>Fernando Gajardo</Link>
        <ul className='items-center hidden md:flex'>
            {links.map(({id, link, texto}) => (
                <li key={id} className='mx-4 hover:border-b-2 border-verde ease-linear '>
                    <Link href={link}>{texto}</Link>
                </li>
            ))
            }
        </ul>
            <div onClick={() => setNav(!nav)}  className='cursor-pointer md:hidden z-10 text-negro mb-5 mt-2 duration-200 bg-blancoBlanco'>
                {nav ? <FaTimes size={20} className='block'/> : <FaBars size={20} className='block' />}   

                {nav && (
                    <ul className='flex flex-col absolute items-end right-0 w-full shadow-md z-20 my-4 pb-3 rounded-md bg-blancoBlanco'>
                    {links.map(({id, link, texto}) => (
                        <li key={id} className='mx-9 hover:border-b-4 border-verde block my-2 text-gris font-semibold text-lg'>
                            <a href={link}>{texto}</a>
                        </li>
                    ))
                    }
                </ul> 
                )}  
                </div>

        

    </nav>
  )
}
export default NavBar