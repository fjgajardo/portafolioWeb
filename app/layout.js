import './globals.css'
import { Martel_Sans } from 'next/font/google'

const martel = Martel_Sans({
  subsets: ['latin'],
  weight: ['200','300','400','600', '700', '800', '900']
})

export const metadata = {
  title: 'Fernando Gajardo - Portafolio',
  description: 'Fernando Gajardo - Portafolio, Diseñador Integral. Diseñador UX/UI',
}




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={martel.className}>{children}</body>
    </html>
  )
}
