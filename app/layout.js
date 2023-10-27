
import './globals.css'

export const metadata = {
  title: 'Safe Map App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-cyan-900 container text-slate-200` }>{children}</body>
    </html>
  )
}
