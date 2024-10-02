'use client'
import NavBar from '/src/app/[locale]/components/NavBar'
import ContenidoSobreMi from '/src/app/[locale]/components/ContenidoSobreMi'


const page = () => {
  return (
    <main>
    <NavBar />

    <div className='md:px-10 px-3'>   
        <ContenidoSobreMi />
    </div>
    </main>
    
  )
}

export default page