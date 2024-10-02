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

    <div className='relative'>
        <button onClick={toggleDropdown} className='block rounded bg-gris-l py-1 px-5 flex gap-2 '>
            <img src="/world.svg" alt="Lenguaje" className='fill-morado-h'/>
            {localActive}
        </button>

        {isOpen && (
            <div className='absolute right-0 mt-1 bg-blancoSecundario rounded py-2 shadow-md'>
                <button 
                    onClick={() => onSelectChange("en")} 
                    className='rounded block py-2 px-3 text-gris hover:bg-gris-2' 
                    value="en">
                    English
                </button>
                <button 
                    onClick={() => onSelectChange("es")} 
                    className='rounded block py-2 px-3 text-gris hover:bg-gris-2' 
                    value="es">
                    Español
                </button>
            </div>
        )}
        
    </div>
  )
}

