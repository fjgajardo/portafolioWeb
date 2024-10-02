'use client'
import NavBar from '/src/app/[locale]/components/NavBar'

const layout = ({ children }) => {
    return (
        <main>
        <NavBar />
        <div className='md:px-10 px-3'>
            {children}
        </div>
        </main>
        
      )
}

export default layout