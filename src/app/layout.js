import { ThemeProvider } from 'next-themes'

export default function Layout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider defaultTheme="system"   enableSystem={true}>{children}</ThemeProvider>
      </body>
    </html>
  )
}