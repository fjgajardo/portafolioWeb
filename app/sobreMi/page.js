'use client'
import NavBar from 'app/components/NavBar'
import ContenidoSobreMi from 'app/components/ContenidoSobreMi'


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