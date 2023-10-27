
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

export const metadata = {
  title: 'Safe Map App',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`bg-cyan-900 container text-slate-200` }>{children}</body>
      </html>
    </ClerkProvider>
  )
}
