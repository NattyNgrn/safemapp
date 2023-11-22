
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

export const metadata = {
  title: 'Safe Map App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={'bg-indigo-200 container text-stone-800 font-[Urbanist] text-4xl'}>
          <ClerkProvider>{children}</ClerkProvider>
        </body>
      </html>
  )
}
