'use client'
import NavBar from 'app/components/NavBar'

const layout = ({ children }) => {
    return (
        <main>
        <NavBar />

        <div className='md:px-10 px-3 md:mt-5'>
            {children}
        </div>
        </main>
        
      )
}

export default layout