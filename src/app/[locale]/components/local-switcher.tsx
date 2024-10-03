import { data } from 'autoprefixer';
import { useRouter } from 'next/navigation';
import React, {useTransition, useState} from 'react'
import { useLocale } from 'use-intl';

export default function LocalSwitcher() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();
    const [isOpen, setIsOpen] = useState(false);

    const onSelectChange = (value) => {
        const nextLocale = value;
        startTransition(() => {
            router.replace(`/${nextLocale}`);
        });
        setIsOpen(false);
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (

    <div className=''>
        <button onClick={toggleDropdown} className='rounded bg-gris-l py-1 px-5 gap-2 text-negro '>
            <div className='flex'>
                <img src="/world.svg" alt="Lenguaje" className='fill-morado-h dark:fill-morado-l'/>
                {localActive}
            </div>
            
        </button>

        {isOpen && (
            <div className='md:absolute bg-blancoSecundario dark:bg-gris-l rounded py-2 shadow-md text-right items-right flex flex-col'>
                <button 
                    onClick={() => onSelectChange("en")} 
                    className='rounded block py-2 px-4 text-gris text-right dark:text-negro  hover:bg-gris-2' 
                    value="en">
                    English
                </button>
                <button 
                    onClick={() => onSelectChange("es")} 
                    className='rounded block py-2 px-3 text-gris text-right dark:text-negro hover:bg-gris-2' 
                    value="es">
                    Español
                </button>
            </div>
        )}
        
    </div>
  )
}

