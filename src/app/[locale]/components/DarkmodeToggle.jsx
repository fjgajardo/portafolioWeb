import React, { useState, useEffect } from 'react'
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from 'next-themes';

export default function DarkModeToggle() {

    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true);
      }, []);

    
    return (
        
        <div>

            <button className='md:absolute md:bottom-16 md:right-16 p-4 border-2 rounded-full text-2xl text-blanco bg-negro'
            onClick={() => {
                setTheme(theme === "light" ? "dark" : "light")       
            }}>
            {mounted && (theme === "light" ? <MdDarkMode /> : <MdLightMode />)} 
        </button>


        </div>
   
    
  )
}
