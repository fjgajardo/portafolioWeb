'use client'
import {useTranslations} from 'next-intl';
import { Link } from '../../i18n/routing';
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import TarjetasPortafolio from './components/TarjetasPortafolio'




export default function Home() {
  return (
    <main >
      <NavBar />

      <div className='md:px-10 px-3'>

        <HeroSection />

        <hr id='TarjetasPortafolio'  className='m-28 opacity-20' />

        <TarjetasPortafolio/>

      </div>
      
      
      
    </main>
  )
}
