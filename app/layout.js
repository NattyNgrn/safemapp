
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

export const metadata = {
  title: 'Safe Map App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={'bg-cyan-900 container text-stone-800 font-[Urbanist]'}>
          <ClerkProvider>{children}</ClerkProvider>
        </body>
      </html>
  )
}
