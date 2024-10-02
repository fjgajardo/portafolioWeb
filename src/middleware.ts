import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es|en)/:path*']
};

export async function getServerSideProps(context) {
  const userAgent = context.req.headers['user-agent'];
  const isDarkPreferred = userAgent.includes('prefers-color-scheme: dark');

  return {
    props: { initialDarkMode: isDarkPreferred },
  };
}