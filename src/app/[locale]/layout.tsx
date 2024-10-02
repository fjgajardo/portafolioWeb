import './globals.css'
import { Martel_Sans } from 'next/font/google'
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

const martel = Martel_Sans({
  subsets: ['latin'],
  weight: ['200','300','400','600', '700', '800', '900']
})

export const metadata = {
  title: 'Fernando Gajardo - Portafolio',
  description: 'Fernando Gajardo - Portafolio, Diseñador Integral. Diseñador UX/UI',
}


 
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body className={martel.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

